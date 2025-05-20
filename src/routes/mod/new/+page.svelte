<div class="flex flex-col items-center justify-center">
		<h1 class="text-3xl font-bold text-center m-4">Create a New Mod</h1>
		<form action="/mod/new" method="POST" class="flex flex-col items-center w-full">
				<input type="text" name="name" placeholder="Mod Name" class="border border-gray-300 rounded-lg p-2 m-2 w-1/2" required />
				<input type="text" name="link" placeholder="Mod Link" class="border border-gray-300 rounded-lg p-2 m-2 w-1/2" required />
				<input type="text" name="image" placeholder="Mod Image URL" class="border border-gray-300 rounded-lg p-2 m-2 w-1/2" required />
				<textarea name="description" placeholder="Mod Description" class="border border-gray-300 rounded-lg p-2 m-2 w-1/2 h-32" required></textarea>
				<button type="submit" class="bg-blue text-white rounded-lg p-2 m-4">Create Mod</button>
		</form>
</div>