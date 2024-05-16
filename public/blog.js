document.addEventListener('DOMContentLoaded', function () {
    const codeCardsContainer = document.getElementById('codeCards');

    // Sample data (replace this with your actual travel experience data)
    const travelExperiences = [
        {
            _id: '1',
            title: 'Bandarban Tour by Shovon',
            description: "Bandarban, located in southeastern Bangladesh, is a picturesque destination known for its lush green hills, waterfalls, and serene rivers. It offers stunning natural beauty with attractions like Nilgiri, Boga Lake, and Chimbuk Hill. The area is also rich in cultural heritage, home to various indigenous communities with unique traditions. Ideal for trekking and adventure, Bandarban provides a tranquil escape for nature lovers and explorers. Its breathtaking landscapes make it a must-visit destination for travelers seeking peace and natural beauty.",
            details: "Embarking on a journey to Bandarban is akin to stepping into a realm of natural wonder and cultural richness. Nestled in southeastern Bangladesh, Bandarban beckons travelers with its captivating landscapes, where verdant hills, cascading waterfalls, and tranquil rivers paint a picturesque tapestry. Exploring this enchanting region offers a multifaceted experience, blending adventure, serenity, and cultural immersion in equal measure. <br /> Bandarban's allure lies in its myriad attractions, each offering a unique glimpse into the region's charm. The majestic Nilgiri, towering high above the clouds, provides panoramic vistas of mist-clad valleys and verdant slopes, while the ethereal Boga Lake, nestled amidst rolling hills, offers a tranquil retreat for weary souls. Adventurers can trek to Chimbuk Hill, scaling its heights to witness awe-inspiring vistas and embrace the whispers of the wind. <br /> Beyond its natural splendor, Bandarban is a melting pot of diverse cultures and traditions. Indigenous communities, such as the Marma, Chakma, and Tripura tribes, welcome visitors with open arms, sharing their customs, rituals, and way of life. Engaging with these communities offers a profound insight into their rich cultural heritage, fostering a deeper appreciation for the region's diversity. <br /> Bandarban's allure transcends mere sightseeing; it's an immersive experience that leaves an indelible mark on the soul. Whether traversing its rugged terrain, delving into its cultural tapestry, or simply basking in the tranquility of its landscapes, a sojourn in Bandarban promises moments of wonder, discovery, and serenity amidst nature's embrace.",
        },

        {
            _id: '2',
            title: 'Sundarban Tour by Shovon',
            description: "The Sundarbans, a UNESCO World Heritage Site, is the largest mangrove forest globally, spanning Bangladesh and India. Its rich biodiversity includes the Royal Bengal Tiger, crocodiles, deer, and diverse bird species. This unique ecosystem, with dense mangrove forests and intricate waterways, attracts nature enthusiasts and researchers. Cultural traditions like honey collection and fishing add to the area's allure, making a visit to the Sundarbans a captivating experience of natural wonders and cultural heritage.",
            details: "Journeying into the heart of the Sundarbans, a world where land, water, and sky converge in a mesmerizing dance of nature's grandeur, is an odyssey unlike any other. Guided by the seasoned hands of local navigators, my expedition aboard a rustic boat became a passage through time and space, each ripple in the water echoing the tales of centuries past. <br /> As we meandered through the labyrinthine waterways, flanked by towering mangrove trees, the air thick with the scent of salt and adventure, anticipation hung palpably in the air. Every corner turned promised a new revelation, a glimpse into the intricate web of life that thrives within this UNESCO World Heritage Site. <br /> The Sundarbans is renowned for its biodiversity, a sanctuary where the iconic Royal Bengal Tiger reigns as king. With every rustle in the underbrush, every distant roar, my pulse quickened with the possibility of an encounter with this majestic creature. And when, bathed in the golden hues of dawn, the tiger emerged from the shadows, it was a moment etched in memory, a testament to the raw beauty and untamed wilderness of this sacred land. <br /> Yet, beyond the thrill of tiger sightings, the Sundarbans offered a symphony of life in all its forms. From the graceful dance of spotted deer to the silent glide of crocodiles through murky waters, every creature seemed to play a part in the intricate tapestry of existence. Birdwatchers, too, found solace in the canopy's embrace, where colorful avian species flitted and soared, their songs blending harmoniously with the rustle of leaves. <br /> But perhaps the most profound moments were those shared with the Sundarbans' indigenous communities, whose lives are intimately intertwined with the rhythms of nature. Sitting around a crackling bonfire, listening to tales of resilience and survival, I gained a newfound appreciation for the deep connection between humanity and the natural world. <br /> As I reluctantly bid farewell to the Sundarbans, my heart heavy with the weight of leaving behind a place that felt like home, I carried with me not just memories, but a profound understanding of the delicate balance of life and the enduring spirit of this wondrous wilderness.",
        },
        {
            _id: '3',
            title: 'Saintmartin Tour by Shovon',
            description: "Saint Martin, a serene island nestled in the Bay of Bengal, captivates visitors with its pristine white sands and crystal-clear waters. This tropical paradise offers an escape from the hustle and bustle of everyday life, inviting travelers to unwind amidst breathtaking natural beauty. With secluded beaches, vibrant coral reefs, and a vibrant local culture, Saint Martin promises a rejuvenating retreat for those seeking tranquility and adventure alike.",
            details: "Embarking on a journey to Saint Martin, a pristine island gem nestled in the azure waters of the Bay of Bengal, is an experience of boundless beauty and serenity. From the moment I set foot on its powdery white sands, I was enveloped in a sense of tranquility, as if time itself had slowed to a gentle rhythm dictated by the ebb and flow of the tide. <br /> Saint Martin is a sanctuary of natural splendor, where lush greenery meets crystalline waters in a breathtaking display of harmony. Exploring the island's coastline, with its hidden coves and secluded beaches, felt like uncovering secrets whispered by the wind. Each stretch of sand revealed a new vista, a new perspective on the island's timeless allure. <br /> Snorkeling in the coral reefs that fringe Saint Martin's shores offered a glimpse into an underwater world teeming with life and color. As I glided through the warm, clear waters, surrounded by vibrant fish and swaying sea fans, I felt a profound sense of connection to the ocean's vastness and beauty. <br /> But Saint Martin is not just about its natural wonders; it is also a place of cultural richness and warmth. Interacting with the island's friendly inhabitants, whose smiles are as bright as the sun overhead, offered insights into their way of life and traditions. From savoring freshly caught seafood at bustling markets to dancing to the rhythms of local music under the stars, every moment spent in Saint Martin was imbued with a sense of joy and camaraderie. <br /> As I reluctantly bid farewell to this island paradise, I carried with me not just memories of its breathtaking landscapes and vibrant culture, but a deep sense of gratitude for the opportunity to experience its beauty firsthand. Saint Martin had touched my soul in ways I could never have imagined, leaving an indelible mark on my heart that would forever draw me back to its shores.",
        },

        {
            _id: '4',
            title: 'Sajek Tour by Shovon',
            description: "Sajek, a scenic gem of Bangladesh, captivates with lush hills, winding rivers, and cultural vibrancy. Trekking trails lead to panoramic vistas, while indigenous communities offer cultural immersion. With its serene ambiance and natural allure, Sajek promises an enchanting escape.",
            details: "Embarking on the Sajek tour with Shovon was an immersive journey into the heart of Bangladesh's natural and cultural treasures. The adventure began with a picturesque drive through winding roads, offering glimpses of lush greenery and cascading waterfalls. Upon reaching Sajek, we were welcomed by the warm hospitality of the indigenous communities, who graciously shared their traditions and way of life with us. Trekking through verdant forests, we ascended Konglak Hill, where panoramic views of mist-covered valleys and rolling hills stretched as far as the eye could see, casting a spell of tranquility over us. Descending from the heights, we reveled in the rejuvenating embrace of pristine waterfalls, their crystal-clear waters offering respite from the tropical heat. <br /> As dusk painted the sky in hues of orange and pink, we gathered around a crackling bonfire, exchanging stories and laughter with newfound friends. The evening was adorned with traditional music and dance, a celebration of the rich cultural tapestry that thrives in Sajek. Amidst the starlit sky and the rhythmic beats of drums, we felt a profound connection to the land and its people. Our Sajek experience was not merely a journey; it was a soul-stirring odyssey that left an indelible mark on our hearts, reminding us of the beauty and diversity that enrich our world. <br /> The Sajek tour with Shovon unfolded like a tapestry of unforgettable moments, each woven with the threads of adventure and discovery. Exploring the hidden trails and verdant forests, we encountered a myriad of flora and fauna, each contributing to the vibrant ecosystem of Sajek. Along the way, we encountered friendly locals tending to their fields and livestock, offering insights into their sustainable way of life. As the day drew to a close, we gathered around a communal feast, savoring the flavors of traditional cuisine infused with local spices and fresh ingredients. Under the canopy of stars, we shared stories and reflections, forging bonds that transcended language and culture. The Sajek tour was more than a travel experience; it was a transformative journey that deepened our appreciation for the natural world and the richness of human connection. ",
        },

        {
            _id: '5',
            title: "Cox's Bazar Tour by Shovon",
            description: "Cox's Bazar, home to the world's longest natural sandy sea beach, captivates with its picturesque coastline, vibrant markets, and rich cultural heritage. From leisurely beach walks to thrilling water sports, it offers an unforgettable coastal escape for travelers seeking sun, sea, and adventure.",
            details: "Embarking on a journey to Cox's Bazar was a captivating experience filled with moments of wonder and discovery. As I set foot on the world's longest natural sandy sea beach, I was immediately mesmerized by the sheer expanse of the shoreline stretching endlessly before me. The rhythmic sound of waves crashing against the golden sands created a soothing melody, inviting me to explore this coastal paradise. <br /> Wandering through the bustling markets of Cox's Bazar, I was enveloped in a whirlwind of sights, sounds, and aromas. Local vendors displayed their wares, offering a vibrant array of fresh seafood, colorful saris, and intricately crafted souvenirs. Each stall seemed to tell a story, a testament to the rich cultural heritage of this coastal town. <br /> The highlight of my trip was undoubtedly the exhilarating water sports activities available along the coastline. From surfing to snorkeling, each adventure offered a unique perspective of the azure waters of the Bay of Bengal. As I rode the waves and explored the underwater world, I felt a profound sense of freedom and exhilaration, completely immersed in the beauty of nature. <br /> As the day transitioned into evening, I found myself drawn to the tranquil beauty of the beach at sunset. With the sky ablaze in hues of orange and pink, I watched in awe as the sun dipped below the horizon, casting a golden glow over the coastline. It was a moment of serenity and reflection, a reminder of the simple joys and wonders of life. <br /> Evenings in Cox's Bazar were filled with the tantalizing aroma of freshly grilled seafood and the laughter of fellow travelers. Gathering around beach bonfires, we shared stories and forged friendships, united by our shared love for adventure and exploration. Each day in Cox's Bazar brought new experiences and discoveries, leaving me with cherished memories to last a lifetime.",
        },
        {
            _id: '6',
            title: 'Rangamati Tour by Shovon',
            description: "Rangamati, a serene hill district in Bangladesh, boasts lush green hills and the tranquil waters of Kaptai Lake. Visitors can trek through dense forests, discover cascading waterfalls, and immerse in the vibrant indigenous culture. With its stunning landscapes and rich heritage, Rangamati offers a peaceful retreat for nature enthusiasts.",
            details: "Rangamati, nestled amidst the verdant hills and serene waters of southeastern Bangladesh, offers a tranquil retreat for travelers seeking solace in nature's embrace. As I ventured into this picturesque hill district, I was captivated by the breathtaking beauty that unfolded before my eyes. The shimmering waters of Kaptai Lake stretched out like a vast mirror, reflecting the lush greenery of the surrounding hillsides. Cruising along the tranquil waters, I felt a sense of serenity wash over me, enveloping me in a peaceful embrace. <br /> Exploring the lush landscapes of Rangamati, I encountered a tapestry of natural wonders waiting to be discovered. Trekking through dense forests, I marveled at the rich biodiversity that thrived in this pristine ecosystem. From cascading waterfalls hidden amidst the foliage to sprawling tea estates carpeting the hillsides, each sight left me in awe of nature's boundless beauty. <br /> Immersing myself in the vibrant culture of the indigenous communities that call Rangamati home, I gained insight into their traditional way of life and rich cultural heritage. Visiting local markets, I sampled exotic fruits and delicacies, while colorful handicrafts adorned the stalls, showcasing the skilled craftsmanship of the local artisans. <br /> As the sun dipped below the horizon, painting the sky in hues of gold and crimson, I found solace in the tranquil ambiance of Rangamati. Gathered around a bonfire under the starlit sky, I shared stories and laughter with fellow travelers, forging bonds that transcended language and culture. <br /> My time in Rangamati was a journey of self-discovery and renewal, a testament to the transformative power of nature's beauty. Amidst the serene waters and lush landscapes, I found peace, serenity, and a renewed sense of connection to the world around me. Rangamati will forever hold a special place in my heart as a sanctuary of tranquility and natural splendor.",
        },
        // Add more travel experience objects as needed
    ];

    // Function to generate travel experience cards
    function generateTravelExperienceCards() {
        travelExperiences.forEach(travelExperience => {
            // Create travel experience card element
            const travelExperienceCard = document.createElement('div');
            travelExperienceCard.classList.add('col-md-4', 'mb-4');
            travelExperienceCard.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${travelExperience.title}</h5>
                        <p class="card-text">${travelExperience.description}</p>
                        <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#travelExperienceModal${travelExperience._id}">
                            View Details
                        </button>
                    </div>
                </div>
            `;
            codeCardsContainer.appendChild(travelExperienceCard);

            // Create modal for travel experience details
            const travelExperienceModal = document.createElement('div');
            travelExperienceModal.classList.add('modal', 'fade');
            travelExperienceModal.id = `travelExperienceModal${travelExperience._id}`;
            travelExperienceModal.innerHTML = `
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${travelExperience.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>${travelExperience.details}</p>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(travelExperienceModal);
        });
    }

    // Call function to generate travel experience cards
    generateTravelExperienceCards();
});
