import frame from '../../assets/frame.png'
export default function HeroSection(){
    return (
        <section className="pb-[114px] pt-20 md:mt-[100px]">
		<div className="container">
			<div className="grid items-center gap-6 md:grid-cols-2">
				<div className="flex justify-center md:order-2">
					<img className="max-md:w-full" src={frame} width="326" height="290" alt="frame" />
				</div>
				<div>
					<h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
						Tasker
					</h1>
					<p className="text-lg  my-3  opacity-60">
                    Stay organized and boost your productivity with TaskMaster! Our intuitive app helps you manage your tasks efficiently, ensuring you never miss a deadline.Create, edit, and prioritize your tasks to suit your workflow.Setting and managing due dates.
					</p>
				</div>
			</div>
		</div>
	</section>
    );
}