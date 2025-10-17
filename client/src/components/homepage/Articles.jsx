import React from "react";
import blogPosts from "../../constants/BlogPosts";

const Articles = () => {
	return (
		<div className="flex flex-col gap-6 p-4">
			<div className="flex gap-10 flex-row items-stretch">
				<div className="flex-1 flex flex-col gap-5 ">
					<div className="flex flex-col gap-3 items-start">
						<span className="text-lg text-secondary-100 text-start">
							Testimonials
						</span>
						<h2 className="text-4xl font-semibold text-start ">
							What our customer say
						</h2>
						<p className="flex-1 text-base text-paragraph-100 text-start">
							Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
							dignissim placerat nisi, adipiscing mauris non purus parturient.
						</p>
					</div>
					<div className="h-full">
						<div className="h-full">
                            {
                            blogPosts.slice(0,1).map((blog) =>{
							return <ArticleCardOne 
                            key={blog.id}
                            Title={blog.title}
                                Subtext={blog.description}
                                Category={blog.category}
                                Image={blog.image}
                                AuthorName={blog.author}
                                AuthorImage={blog.authorImage}
                                Date={blog.date}/>
                                })
                            }
						</div>
					</div>
				</div>
				<div className="w-1/2 flex flex-col gap-4">
                    <div className="w-full h-full flex flex-col justify-between">
                        {
                            blogPosts.slice(1,4).map((blog) =>{
                                return <ArticleCardTwo
                                key={blog.id}
                                Title={blog.title}
                                Subtext={blog.description}
                                Category={blog.category}
                                Image={blog.image}
                                AuthorName={blog.author}
                                AuthorImage={blog.authorImage}
                                Date={blog.date}
                                />
                            })
                        }
                    

                    </div>
                </div>
			</div>
		</div>
	);
};

const ArticleCardOne = ({
	Title = "Create Cozy Dinning Room Vibes",
	Subtext = "Decorating with neutrals brings balance to the dining room. With eclectic decoration on the sides, Caruso Dining Table and Cyrillo Dining Chairs elevate the tonal base of the room. The modern furniture set gives personality to any space in all types of architecture.The wide volume enables everyone to sit back and relax, be it in the dining room, conference, or office.",
	Category = "Tips and Trick",
	Image = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVjb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    AuthorName='Jerremy Jean',
    AuthorImage ='https://i.pravatar.cc/150?img=45',
    Date='Friday, 1 April 2022'
}) => {
	return (
		<div className="relative flex gap-4 py-4 h-full items-end">
			<img
				className="relative w-full h-full object-cover"
				src={Image}
				alt={Title}
			/>
			<div className="absolute h-full w-full z-1 p-8 flex flex-col gap-5 justify-end items-start bg-gradient-to-t from-[#0000008a]">
				<div className="flex flex-col gap-3 w-full">
					<span className="text-xs text-paragraph-100">{Category}</span>
					<h3 className="text-2xl text-white font-semibold">{Title}</h3>
					<p className="text-sm text-paragraph-500 truncate w-[90%] ">
						{Subtext}
					</p>
				</div>
				<button className="cursor text-sm text-paragraph-500 hover:text-paragraph-300 hover:underline cursor-pointer">
					Read More
				</button>
			</div>
		</div>
	);
};

const ArticleCardTwo = ({
	Title = "Create Cozy Dinning Room Vibes",
	Subtext = "Decorating with neutrals brings balance to the dining room. With eclectic decoration on the sides, Caruso Dining Table and Cyrillo Dining Chairs elevate the tonal base of the room. The modern furniture set gives personality to any space in all types of architecture.The wide volume enables everyone to sit back and relax, be it in the dining room, conference, or office.",
	Category = "Tips and Trick",
	Image = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVjb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    AuthorName='Jerremy Jean',
    AuthorImage ='https://i.pravatar.cc/150?img=45',
    Date='Friday, 1 April 2022'
}) => {
	return (
		<div className="flex gap-4 w-full items-center p-4 rounded-2xl hover:bg-screen-200 transition cursor-pointer">
			<img className="w-50 h-50 "
				src={Image}
				alt={Title}
			/>
			<div className="flex-1 flex flex-col gap-3">
				<div className="w-full flex flex-col gap-1 min-w-0">
					<span className="text-xs text-paragraph-100">{Category}</span>
					<h3 className="text-lg text-black font-semibold">{Title}</h3>
					<p className="text-sm text-title-400 truncate w-[200px] max-w-full ">
						{Subtext}
					</p>
				</div>
				<div className="flex justify-between gap-4 w-full">
					<div className="flex gap-2 items-center">
						<img className="w-5 h-5 rounded-full object-cover"
							src={AuthorImage}
							alt={AuthorName}
						/>
						<span className="text-xs font-bold">By {AuthorName}</span>
					</div>
                    <span className="text-xs text-paragraph-100">{Date}</span>
				</div>
			</div>
		</div>
	);
};

export default Articles;
