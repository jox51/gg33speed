<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class CheckPaidStatus {
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response {
        // Check if the user is authenticated and has a valid subscription or their email is in the manual user list.
        if ($this->userHasAccess($request)) {
            return $next($request);
        } else {
            return redirect()->route('cancel');
        }
    }

    /**
     * Check if the user has access based on subscription status or manual override.
     *
     * @param  \Illuminate\Http\Request $request
     * @return bool
     */
    protected function userHasAccess(Request $request): bool {
        $user = auth()->user();
        if (!$user) {
            return false;
        }

        if (in_array($user->email, $this->manualUserList())) {
            $this->grantAdminAccess($user);
        }

        return $user->credits > 0 || $user->is_admin;
    }

    /**
     * Grant admin access to the user if they are in the manual user list.
     *
     * @param \App\Models\User $user
     */
    protected function grantAdminAccess($user) {
        if (!$user->is_admin) { // Only update if not already an admin
            $user->is_admin = true;
            $user->save();
        }
    }

    /**
     * A list of users who can manually access the site without a subscription.
     *
     * @return array
     */
    protected function manualUserList(): array {
        return ['test@test.com', 'garythenumbersguy@gmail.com', 'test7@test.com', 'watercups09@yahoo.com', 'wolf_like_me_77@yahoo.com'];
    }
}
