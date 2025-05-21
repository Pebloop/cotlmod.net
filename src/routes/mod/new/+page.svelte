<script>
	import { tags } from '$lib/tags.js';
	import { versions } from '$lib/versions.js';

	function handleFormSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		let token = document.cookie.split('; ').find(row => row.startsWith('token='));

		if (token) {
			token = token.split('=')[1];
		} else {
			alert('You must be logged in to create a mod.');
			return;
		}

		console.log('Form data:', data);

		fetch('/api/mod', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				alert('Mod created successfully!');
				//window.location.href = '/';
			} else {
				alert('Error creating mod: ' + data.message);
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('An error occurred while creating the mod.');
		});
	}
</script>

<div class="flex flex-col items-center justify-center">
		<h1 class="text-3xl font-bold text-center m-4">Create a New Mod</h1>
		<form action="/api/mod" method="POST" class="flex flex-col items-center w-full" on:submit={handleFormSubmit}>
				<input type="text" name="name" placeholder="Mod Name" class="border border-gray-300 rounded-lg p-2 m-2 w-1/2" required />
				<input type="text" name="link" placeholder="Mod Link" class="border border-gray-300 rounded-lg p-2 m-2 w-1/2" required />
				<input type="text" name="image" placeholder="Mod Image URL" class="border border-gray-300 rounded-lg p-2 m-2 w-1/2" required />
				<textarea name="description" placeholder="Mod Description" class="border border-gray-300 rounded-lg p-2 m-2 w-1/2 h-32" required></textarea>
			  <label for="tags" class="text-lg font-bold text-center m-4">Select Tags:</label>
			  <select name="tags" class="border border-gray-300 rounded-lg p-2 m-2 w-1/2" multiple>
					{#each tags as tag}
						<option value={tag}>{tag}</option>
					{/each}
				</select>
				<label for="version" class="text-lg font-bold text-center m-4">Game version:</label>
				<select name="version" class="border border-gray-300 rounded-lg p-2 m-2 w-1/2">
					{#each versions as version}
						<option value={version} class="bg-gray-3">{version}</option>
					{/each}
				</select>
			<button type="submit" class="bg-blue text-white rounded-lg p-2 m-4 bg-red">Create Mod</button>
		</form>
</div>