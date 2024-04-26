<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class UserReadingEmail extends Mailable {
    use Queueable, SerializesModels;

    private User $user;
    private array $userDetails;
    private string $date;
    private int $creditsRemaining;

    /**
     * Create a new message instance.
     */
    public function __construct(User $user, array $userDetails, string $date, int $creditsRemaining) {
        $this->user = $user;
        $this->userDetails = $userDetails;
        $this->date = $date;
        $this->creditsRemaining = $creditsRemaining;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope {
        return new Envelope(
            subject: 'Your Speed Reading Results' . " " . config('app.name'),
            from: config('mail.from.address'),
            cc: "support@gg33speedread.com",
            to: $this->user->email,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content {
        return new Content(
            view: 'emails.user-reading',
            with: ['user' => $this->user, 'userDetails' => $this->userDetails, 'date' => $this->date, 'creditsRemaining' => $this->creditsRemaining],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array {
        return [];
    }
}
