import React, {useState} from "react";
import "./DisplayDescription.css";

export default function DisplayDescription(){
    
    let [dogBreed, setDogBreed] = useState();

        function afghanHoundDescription(event){
            event.preventDefault();
            setDogBreed(
                <p>
                <strong> The Afghan Hound </strong>
                is one of the oldest breeds, getting his start thousands of years ago in a remote region of what is now Afghanistan, Pakistan, and India. <br /> <br />
                Originally used as a hunting dog and status symbol, the breed earned its keep with ease and is still prized today for his speed and agility. This prey drive is deeply ingrained in him and other sighthounds, making off-leash romps in open areas too dangerous for the breed. He’s also not recommended for life with cats or other small pets, either. <br /> <br />
                The Afghan gets a bad rep for scoring low on dog intelligence tests, but the breed is far from dumb. Instead, he’s one of the most independent canines, preferring to do things his way. Training an Afghan hound takes a lot of patience and creativity, but in the end, you’re rewarded with a highly affectionate, loyal companion.
                </p>
            );
        }

        function alaskanMalamuteDescription(event){
            event.preventDefault();
            setDogBreed(
                <p>
                <strong>The Alaskan Malamute </strong> 
                can be traced back over 4,000 years to the Arctic, where he was used primarily as a hunting companion and sled dog by the Inuit people. Today, he’s still a favorite on sled teams, though unlike huskies, he’s prized for power rather than speed and endurance. Weighing up to 85 pounds, he’s a large, muscular pup, so early obedience training is a must to establish manners before he’s too strong for his own good. <br /><br />
                Malamutes are working dogs at heart and need an owner who can provide daily physical and mental exercise. This breed excels in sled pulling and skijoring, but he’ll also enjoy long hikes and other outdoor adventures. His thick coat does best in colder climates, so those in warmer areas should keep him in air-conditioned areas to prevent overheating. <br /><br />
                A kiddie pool full of ice will also be super appreciated!
                </p>
            );
        }

        function chowChowDescription(event){
            event.preventDefault();
            setDogBreed(
                <p>
                <strong> The Chow Chow </strong> 
                dates back over 2,000 years to the Han Dynasty of China. He’s held many roles in that time, serving as a hunting dog, guardian, hauler, and pampered royal pet. <br /><br />
                His coat comes in rough and smooth varieties, with both having incredibly expressive faces and the breed’s well-known blue tongue. Your Chow needs weekly brushing, especially during shedding season, and rough-coat pups require even more frequent grooming to prevent matting. <br /><br />
                Chows are serious dogs, and they won’t bark much, making them a good pick for urban life. But he is not recommended for new dog owners, as his independent nature is almost as impressive as his mane. He needs ongoing, positive training from an early age, with a special focus on socializing, as he can be prone to aloofness with dogs and strangers.
                </p>
            );
          
        }

        function samoyedDescription(event){
            event.preventDefault();
            setDogBreed(
                <p>
                <strong> Samoyed. </strong> 
                This smiling sweetheart dates back over 2,000 years to the Samoyedic people of modern-day Siberia. The Samoyed was a multipurpose companion for the tribe, functioning as a hunting dog, sled puller, watchdog, and warming buddy thanks to his dense coat. Today, the Samoyed is still a beloved sled puller, though he also excels as a hiking, biking, or jogging companion. <br /><br />
                Also called “Sammies,” Samoyeds can be expensive dogs, but they are one of the sweetest northern breeds around. They’re also one of the best family dogs, but they can be a handful when it comes to training. Remember to keep sessions short and focused but fun, with lots of positive reinforcement for a job well done. Never harshly correct your Sammie, as his spirit is delicate.
                </p>
            );

        }


    return(
        <div className="DisplayDescription">
            <div className="row">
                <div className="col-3">
                    <img 
                    src="https://www.k9ofmine.com/wp-content/uploads/2021/02/white-afghan-hound.jpg" 
                    class="img-fluid d-none d-sm-block" 
                    alt="Afghan hound"
                    onClick={afghanHoundDescription} />
                </div>
                <div className="col-3">
                    <img 
                    src="https://www.k9ofmine.com/wp-content/uploads/2020/06/Alaskan-malamute.jpg" 
                    class="img-fluid d-none d-sm-block" 
                    alt="Alaskan malamute"
                    onClick={alaskanMalamuteDescription}  />
                </div>
                <div className="col-3">
                    <img 
                    src="https://www.k9ofmine.com/wp-content/uploads/2020/08/chow-chow-breed.jpg" 
                    class="img-fluid d-none d-sm-block" 
                    alt="Chow-chow"
                    onClick={chowChowDescription}
                    />
                </div>
                <div className="col-3">
                    <img 
                    src="https://www.k9ofmine.com/wp-content/uploads/2018/07/samoyed.jpg" 
                    class="img-fluid d-none d-sm-block" 
                    alt="Samoyed"
                    onClick={samoyedDescription}/>
                </div>
            </div>
            <div className="row"> 
                <p> {dogBreed} </p>
            </div>
        </div>
    )
}