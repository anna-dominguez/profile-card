import Github from './svg/Github';
import Instagram from './svg/Instagram';
import LinkedIn from './svg/LinkedIn';
import Twitter from './svg/Twitter';

const App = () => (
	<div className="w-full min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] flex pt-[200px] justify-center">
		<main className="bg-white max-w-[340px] w-full py-6 px-4 rounded-lg flex flex-col gap-10 shadow h-fit text-center">
			<section className="flex flex-col items-center gap-6">
				<img src="/img/profile.png" alt="Sarah Dole" className="size-16" />
				<article className="flex flex-col gap-1">
					<h1 className="text-xl font-medium text-neutral-900">Sarah Dole</h1>
					<p className="text-sm text-neutral-600">
						Front End Engineer @ Microsoft
					</p>
				</article>
				<article>
					<p className="text-base text-neutral-600 font-">
						I turn coffee into bugs which are fixed by someone else. Certified
						Stack Overflow and ChatGPT developer.
					</p>
				</article>
			</section>
			<section className="flex flex-col gap-6">
				<button
					className="font-medium text-white bg-indigo-700 p-2.5 rounded-[4px] hover:bg-indigo-800"
					type="button"
				>
					Contact me
				</button>
				<div className="flex justify-center gap-4 text-indigo-700">
					<button
						type="button"
						className="p-2 cursor-pointer outline-8 outline-indigo-100 hover:text-indigo-800"
					>
						<Github style="size-5" />
					</button>
					<button
						type="button"
						className="p-2 cursor-pointer outline-8 outline-indigo-100 hover:text-indigo-800"
					>
						<LinkedIn style="size-5" />
					</button>
					<button
						type="button"
						className="p-2 cursor-pointer outline-8 outline-indigo-100 hover:text-indigo-800"
					>
						<Instagram style="size-5" />
					</button>
					<button
						type="button"
						className="p-2 cursor-pointer outline-8 outline-indigo-100 hover:text-indigo-800"
					>
						<Twitter style="size-5" />
					</button>
				</div>
			</section>
		</main>
	</div>
);

export default App;
