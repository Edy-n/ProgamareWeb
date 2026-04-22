import { useState } from 'react';

function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [feedback, setFeedback] = useState('');

	function handleSubmit() {
		if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
			setFeedback('Multumim, ' + name + '!');
		} else {
			setFeedback('Completeaza toate campurile!');
		}
	}

	return (
		<div>
			<h3>Formular de contact</h3>
			<input
				type="text"
				placeholder="Nume"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<textarea
				placeholder="Mesaj"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button onClick={handleSubmit}>Submit</button>
			{feedback && <p>{feedback}</p>}
		</div>
	);
}

export default ContactForm;
