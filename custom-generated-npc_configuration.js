const default_genx_active = true;
const default_genx_bad_active = true;
const default_genx_chad_active = true;
const default_genx_coworker_active = true;
const default_genx_lad_active = true;

const default_genz_active = true;
const default_genz_bad_active = true;
const default_genz_chad_active = true;
const default_genz_coworker_active = true;
const default_genz_lad_active = true;

const default_millenial_active = true;
const default_millenial_bad_active = true;
const default_millenial_chad_active = true;
const default_millenial_coworker_active = true;
const default_millenial_lad_active = true;

const modded_generate_npcs_list = [
    //     {
    //     Version: "0",
    //         NPC_Generation_Map: [
    //           {
    //             Generation: "",
    //             Active: true,
    //             First_Names: [

    //             ],
    //             Hand_Description: [

    //             ],
    //             NPC_Type_Map: [
    //               {
    //                 Type: "",
    //                 Active: true,
    //                 NPCs: [
    //                   {
    //                     Picture_Name: "",
    //                     Attractiveness: 0,
    //                     Unfamiliar_Name_List: [
    //                     ],
    //                     Description_List: [
    //                     ],
    //                     Tags: [
    //                     ],
    //                     Race: "",
    //                     DickType: ""
    //                   }
    //                 ]
    //                 }
    //             ]
    //         }
    //     ]
    // }
]


const default_generate_npcs = {
    Version: "0.1",
    NPC_Generation_Map: [{
            Generation: "genx",
            Active: default_genx_active,
            First_Names: [
                "Michael",
                "Christopher",
                "Matthew",
                "Joshua",
                "David",
                "James",
                "Daniel",
                "Robert",
                "Bob",
                "Bill",
                "William",
                "John",
                "Jason",
                "Justin",
                "Andrew",
                "Ryan",
                "Anthony",
                "Eric",
                "Kevin",
                "Steven",
                "Timothy",
                "Richard",
                "Jeremy",
                "Kyle",
                "Benjamin",
                "Charles",
                "Mark",
                "Patrick",
                "Scott",
                "Nathan",
                "Dustin",
                "Tyler",
                "Alexander",
                "Samuel",
                "Adam",
                "Aaron",
                "Brian",
                "Bradley",
                "Brent",
                "Brett",
                "Chad",
                "Christian",
                "Craig",
                "Damon",
                "Darren",
                "Darryl",
                "Dennis",
                "Derek",
                "Douglas",
                "Geoffrey",
                "Greg",
                "Jeff",
                "Jason",
                "Jody",
                "Joel",
                "Jonathan",
                "Keith",
                "Kurt",
                "Larry",
                "Marc",
                "Michael",
                "Neil",
                "Paul",
                "Raymond",
                "Shane",
                "Shawn",
                "Todd"
            ],
            Hand_Description: [
                "wrinkly",
                "firm",
                "manly",
                "masculine",
                "clammy",
                "sweaty",
                "rough"
            ],
            NPC_Type_Map: [{
                    Type: "bad",
                    Active: default_genx_bad_active,
                    NPCs: [{
                            Picture_Name: "1",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "older guy",
                                "_guy who looks like a dad"
                            ],
                            Description_List: [
                                "a guy who looks like a typical dad",
                                "a nice, daddish-looking guy",
                                "a _guy with a mustache"
                            ],
                            Tags: [
                                "gentleman"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "2",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "older guy",
                                "_guy who looks like a dad"
                            ],
                            Description_List: [
                                "a guy who looks like a typical dad",
                                "a nice, daddish-looking guy",
                                "a _guy with a mustache"
                            ],
                            Tags: [
                                "gentleman"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "3",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "has-been",
                                "older guy",
                                "older guy with a beard"
                            ],
                            Description_List: [
                                "a guy with a beard",
                                "a bearded _guy"
                            ],
                            Tags: [
                                "beard"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "4",
                            Attractiveness: 2,
                            Unfamiliar_Name_List: [
                                "older guy",
                                "balding guy"
                            ],
                            Description_List: [
                                "an older asian gentleman",
                                "an older asian guy with a receding hairline"
                            ],
                            Tags: [
                                "chubby"
                            ],
                            Race: "asian",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "5",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "has-been",
                                "older guy",
                                "older bearded guy"
                            ],
                            Description_List: [
                                "a guy with a beard",
                                "a bearded _guy with glasses"
                            ],
                            Tags: [
                                "beard"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "6",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "has-been",
                                "older guy",
                                "older bearded guy"
                            ],
                            Description_List: [
                                "a guy with a beard",
                                "a bearded _guy with glasses"
                            ],
                            Tags: [
                                "beard",
                                "bald"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "7",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "older guy"
                            ],
                            Description_List: [
                                "a man with glasses",
                                "an older _guy with a smile that's way too big"
                            ],
                            Tags: [
                                "annoying"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "8",
                            Attractiveness: 2,
                            Unfamiliar_Name_List: [
                                "older man",
                                "older _guy"
                            ],
                            Description_List: [
                                "a _guy with glasses",
                                "an older _guy with a beard and glasses"
                            ],
                            Tags: [
                                "beard"
                            ],
                            Race: "latin",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "9",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "pale _guy",
                                "older _guy"
                            ],
                            Description_List: [
                                "a pale older man",
                                "an older guy with glasses"
                            ],
                            Tags: [
                                "creepy"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "10",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "older _guy"
                            ],
                            Description_List: [
                                "an older man",
                                "an older guy with glasses"
                            ],
                            Tags: [],
                            Race: "white",
                            DickType: "bwc"
                        }
                    ]
                },
                {
                    Type: "chad",
                    Active: default_genx_chad_active,
                    NPCs: [{
                            Picture_Name: "1",
                            Attractiveness: 8,
                            Unfamiliar_Name_List: [
                                "stoic man",
                                "intense man"
                            ],
                            Description_List: [
                                "a man, stoic yet intense,",
                                "a man whose icy eyes pierce you from beneath his receding hairline"
                            ],
                            Tags: [
                                "chad"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "2",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "middle-aged _guy",
                                "older _guy"
                            ],
                            Description_List: [
                                "an older man with messy hair",
                                "a middle-aged guy"
                            ],
                            Tags: [],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "3",
                            Attractiveness: 7,
                            Unfamiliar_Name_List: [
                                "suave man",
                                "charming man",
                                "confident man",
                                "bearded man"
                            ],
                            Description_List: [
                                "a supremely confident man",
                                "a man exuding pure confidence"
                            ],
                            Tags: [
                                "chad",
                                "beard"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "4",
                            Attractiveness: 8,
                            Unfamiliar_Name_List: [
                                "businessman",
                                "suave man"
                            ],
                            Description_List: [
                                "a suave businessman",
                                "a suave-looking older man",
                                "a slick yet slightly-creepy looking man"
                            ],
                            Tags: [
                                "chad",
                                "creepy"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "5",
                            Attractiveness: 7,
                            Unfamiliar_Name_List: [
                                "middle-aged businessman",
                                "bald _guy"
                            ],
                            Description_List: [
                                "an intense older businessman",
                                "an intense-looking businessman"
                            ],
                            Tags: [
                                "bald",
                                "chad",
                                "fuckboy"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "6",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "stern man",
                                "intense man"
                            ],
                            Description_List: [
                                "an intense-looking man",
                                "a man with a very stern expression"
                            ],
                            Tags: [
                                "chad",
                                "bully",
                                "beard"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "7",
                            Attractiveness: 8,
                            Unfamiliar_Name_List: [
                                "smiling man",
                                "middle-aged guy"
                            ],
                            Description_List: [
                                "a man with a big smile",
                                "a middle-aged guy with a big smile"
                            ],
                            Tags: [
                                "chad",
                                "gentleman"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "8",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "interesting man",
                                "businessman"
                            ],
                            Description_List: [
                                "an older businessman with a clean-cut look",
                                "a middle-aged guy"
                            ],
                            Tags: [
                                "chad"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "9",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "interesting man",
                                "businessman"
                            ],
                            Description_List: [
                                "an older businessman with a clean-cut look",
                                "a middle-aged guy"
                            ],
                            Tags: [
                                "chad",
                                "bald"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "10",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "balding guy",
                                "middle-aged _guy"
                            ],
                            Description_List: [
                                "a sleazy-looking older man",
                                "a guy who looks a bit creepy"
                            ],
                            Tags: [
                                "chad",
                                "fuckboy",
                                "creepy",
                                "beard",
                                "bald"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        }
                    ]
                },
                {
                    Type: "coworker",
                    Active: default_genx_coworker_active,
                    NPCs: [{
                            Picture_Name: "1",
                            Attractiveness: 1,
                            Unfamiliar_Name_List: [
                                "old-timer",
                                "wrinkled _guy",
                                "grizzled man",
                                "weathered man",
                                "veteran salesman"
                            ],
                            Description_List: [
                                "a wrinkled guy with a thick lion's mane of hair",
                                "a grizzled man with deep wrinkles and blue eyes",
                                "a weathered man who looks like he's been through a lot",
                                "a veteran who's seen it all and lived to tell the tale",
                                "an old man with a smoker's face and a dark brown tie"
                            ],
                            Tags: [
                                "smoker",
                                "weathered",
                                "grizzled"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "2",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "curly-haired _guy",
                                "_guy with big glasses"
                            ],
                            Description_List: [
                                "a friendly-looking salesman with curly brown hair",
                                "a _guy with curly hair and big 70s-style glasses"
                            ],
                            Tags: [
                                "salesman",
                                "curly",
                                "gentleman",
                                "intelligent",
                                "glasses"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "3",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "mustachioed _guy",
                                "serious-looking _guy"
                            ],
                            Description_List: [
                                "a guy with a thick mustache and furrowed brow",
                                "a serious-looking salesman with a thick mustache"
                            ],
                            Tags: [
                                "mustache"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "4",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "executive",
                                "businessman"
                            ],
                            Description_List: [
                                "a guy with a pinstripe blue suit and flower tie",
                                "an ambitious-looking businessman with rosy cheeks and blue eyes"
                            ],
                            Tags: [
                                "ambitious",
                                "executive",
                                "chad",
                                "rich"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "5",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "bearded guy with glasses",
                                "scruffy-looking _guy"
                            ],
                            Description_List: [
                                "a guy with glasses and a beard",
                                "a scruffy _guy with touseled hair and a friendly smile"
                            ],
                            Tags: [
                                "nerd",
                                "lazy",
                                "gentleman",
                                "beard",
                                "glasses"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "6",
                            Attractiveness: 8,
                            Unfamiliar_Name_List: [
                                "tough-looking _guy",
                                "man with a mullet"
                            ],
                            Description_List: [
                                "a _guy with a fierce expression and a mullet",
                                "a man with a chiseled jawline and piercing eyes"
                            ],
                            Tags: [
                                "badass",
                                "masculine",
                                "chad",
                                "jock",
                                "ambitious",
                                "dominant",
                                "mustache"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "7",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "charismatic businessman",
                                "suave _guy"
                            ],
                            Description_List: [
                                "an ambitious-looking guy with a big smile",
                                "a _guy who looks like he'll do anything to close a deal"
                            ],
                            Tags: [
                                "sleazebag",
                                "ambitious",
                                "chad",
                                "wealthy",
                                "rich"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "8",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "older man",
                                "older gentleman"
                            ],
                            Description_List: [
                                "a shorter _guy with combed-back hair and a friendly smile",
                                "a pale _guy with a blue pinstripe suit and a kind expression"
                            ],
                            Tags: [
                                "friendly"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "9",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "older businessman",
                                "salesman"
                            ],
                            Description_List: [
                                "a cutthroat-looking guy in a brown suit with a striped tie",
                                "an older man with a sharp appearance and intense gaze"
                            ],
                            Tags: [
                                "intense",
                                "bully",
                                "chad",
                                "ambitious"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "10",
                            Attractiveness: 2,
                            Unfamiliar_Name_List: [
                                "older executive",
                                "wise-looking man"
                            ],
                            Description_List: [
                                "an older man with combed hair and a striped suit",
                                "a wise-looking man in a suit and tie"
                            ],
                            Tags: [
                                "ambitious",
                                "wise",
                                "thoughtful",
                                "intelligent"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        }
                    ]
                },
                {
                    Type: "lad",
                    Active: default_genx_lad_active,
                    NPCs: [{
                            Picture_Name: "1",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "older guy",
                                "white-haired guy"
                            ],
                            Description_List: [
                                "an asian businessman with white hair",
                                "an older businessman"
                            ],
                            Tags: [],
                            Race: "asian",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "2",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "bald guy",
                                "balding guy"
                            ],
                            Description_List: [
                                "a muscular older guy",
                                "a middle-aged man"
                            ],
                            Tags: [
                                "bald",
                                "beard",
                                "jock"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "3",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "guy with glasses",
                                "man with glasses"
                            ],
                            Description_List: [
                                "an older guy",
                                "a middle-aged man with glasses"
                            ],
                            Tags: [],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "4",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "bearded man",
                                "smiling man"
                            ],
                            Description_List: [
                                "a guy with a beard",
                                "a middle-aged man"
                            ],
                            Tags: [
                                "beard"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "5",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "middle-aged guy",
                                "clean-cut guy"
                            ],
                            Description_List: [
                                "a normal-looking middle-aged guy",
                                "a friendly-looking middle-aged man"
                            ],
                            Tags: [
                                "gentleman"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "6",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "balding guy",
                                "frumpy man"
                            ],
                            Description_List: [
                                "a friendly, normal looking guy",
                                "a nice-seeming older guy with a daddish sense of style"
                            ],
                            Tags: [],
                            Race: "latin",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "7",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "strange _guy",
                                "older guy with a buzz cut"
                            ],
                            Description_List: [
                                "an older guy with a buzz cut",
                                "a mean-looking guy"
                            ],
                            Tags: [
                                "bully",
                                "fuckboy",
                                "creepy"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "8",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "bearded man",
                                "middle-aged _guy"
                            ],
                            Description_List: [
                                "a middle-aged man with a beard",
                                "an older guy with a beard"
                            ],
                            Tags: [
                                "beard"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "9",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "smiling businessman",
                                "older guy"
                            ],
                            Description_List: [
                                "a businessman with a big smile",
                                "a friendly-looking older guy"
                            ],
                            Tags: [],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "10",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "brown-haired dude",
                                "middle-aged guy"
                            ],
                            Description_List: [
                                "a guy in his middle ages",
                                "an older guy",
                                "a bearded man"
                            ],
                            Tags: [
                                "beard"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        }
                    ]
                }
            ]
        },
        {
            Generation: "genz",
            Active: default_genz_active,
            First_Names: [
                "Noah",
                "Liam",
                "Oliver",
                "Elijah",
                "Lucas",
                "Mason",
                "Levi",
                "James",
                "Asher",
                "Mateo",
                "Aiden",
                "Benjamin",
                "Logan",
                "Henry",
                "Ethan",
                "Wyatt",
                "Leo",
                "Leriel",
                "Eero",
                "Jack",
                "Grayson",
                "Jackson",
                "Sebastian",
                "Carter",
                "William",
                "Daniel",
                "Owen",
                "Julian",
                "Lincoln",
                "Ezra",
                "Michael",
                "Alexander",
                "Samuel",
                "Hudson",
                "Jacob",
                "Luke",
                "Jayden",
                "David",
                "Maverick",
                "Josiah",
                "Matthew",
                "Elias",
                "Jaxon",
                "Isaiah",
                "Eli",
                "Kai",
                "Joseph",
                "John",
                "Anthony",
                "Luca",
                "Adam",
                "Ezekiel",
                "Thomas",
                "Caleb",
                "Channing",
                "Lark",
                "Karter",
                "Beckett",
                "Cash",
                "Jax",
                "Zayden",
                "Kingston",
                "Maddox",
                "Brantley",
                "Bentley"
            ],
            Hand_Description: [
                "smooth",
                "youthful"
            ],
            NPC_Type_Map: [{
                    Type: "bad",
                    Active: default_genz_bad_active,
                    NPCs: [{
                            Picture_Name: "1",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "chubby _guy",
                                "annoying _guy"
                            ],
                            Description_List: [
                                "an ugly _guy",
                                "a frumpy-looking _guy",
                                "an annoying-looking _guy"
                            ],
                            Tags: [
                                "chubby",
                                "nerd",
                                "annoying"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "2",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "annoying blonde _guy",
                                "blonde _guy with glasses",
                                "chubby _guy with glasses",
                                "nerdy-looking blonde _guy"
                            ],
                            Description_List: [
                                "a _guy who's smiling too much",
                                "an annoyingly happy-looking dude",
                                "a chubby _guy with a high-pitched voice"
                            ],
                            Tags: [
                                "nerd"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "3",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "mousey-looking _guy",
                                "_guy with a slightly creepy face"
                            ],
                            Description_List: [
                                "a skinny fuckboy",
                                "a skinny, mousey-looking _guy"
                            ],
                            Tags: [
                                "fuckboy"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "4",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "sunglasses-wearing fuckboy",
                                "fuckboy with a Gen-Z mop top"
                            ],
                            Description_List: [
                                "a _guy with sunglasses",
                                "a _guy wearing sunglasses",
                                "a short _guy with sunglasses"
                            ],
                            Tags: [
                                "fuckboy",
                                "short"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "5",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "chubby _guy",
                                "pudgy _guy"
                            ],
                            Description_List: [
                                "a chubby _guy with glasses",
                                "an annoying-looking nerd"
                            ],
                            Tags: [
                                "chubby",
                                "annoying"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "6",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "skinny _guy",
                                "tall _guy with curly hair"
                            ],
                            Description_List: [
                                "a tall, pale _guy",
                                "a bored-looking _guy"
                            ],
                            Tags: [
                                "tall"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "7",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "smug-looking _guy",
                                "already-balding _guy"
                            ],
                            Description_List: [
                                "a _guy with bushy eyebrows",
                                "a _guy with a smug expression"
                            ],
                            Tags: [
                                "skinny",
                                "smug"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "8",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "nerd",
                                "nerdy _guy",
                                "annoying-looking geek"
                            ],
                            Description_List: [
                                "a guy who looks like the definition of the word 'geek'",
                                "a skinny geek"
                            ],
                            Tags: [
                                "skinny",
                                "nerd",
                                "annoying"
                            ],
                            Race: "latin",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "9",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "nerd",
                                "chubby nerd",
                                "chubby asian _guy"
                            ],
                            Description_List: [
                                "an asian _guy with glasses",
                                "an asian _guy with rosy cheeks and glasses"
                            ],
                            Tags: [
                                "nerd",
                                "chubby"
                            ],
                            Race: "asian",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "10",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "annoying-looking _guy with glasses",
                                "_guy with glasses"
                            ],
                            Description_List: [
                                "an annoying-looking guy"
                            ],
                            Tags: [
                                "annoying"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        }
                    ]
                },
                {
                    Type: "chad",
                    Active: default_genz_chad_active,
                    NPCs: [{
                            Picture_Name: "1",
                            Attractiveness: 10,
                            Unfamiliar_Name_List: [
                                "total chad",
                                "blonde-haired _guy"
                            ],
                            Description_List: [
                                "a _guy with a leonine mane",
                                "a blonde-haired, blue-eyed _guy"
                            ],
                            Tags: [
                                "chad",
                                "jock"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "2",
                            Attractiveness: 8,
                            Unfamiliar_Name_List: [
                                "jock",
                                "tough-looking _guy"
                            ],
                            Description_List: [
                                "a confident _guy",
                                "a muscular _guy"
                            ],
                            Tags: [
                                "jock",
                                "bully"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "3",
                            Attractiveness: 7,
                            Unfamiliar_Name_List: [
                                "typical gen-Z guy",
                                "guy with a mop top"
                            ],
                            Description_List: [
                                "a guy with a mop top",
                                "a grinning _guy"
                            ],
                            Tags: [
                                "fuckboy",
                                "bully"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "4",
                            Attractiveness: 8,
                            Unfamiliar_Name_List: [
                                "brown-haired _guy",
                                "blue-eyed _guy",
                                "nice-looking guy"
                            ],
                            Description_List: [
                                "an intense-looking guy",
                                "a guy who looks very intense"
                            ],
                            Tags: [
                                "nice"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "5",
                            Attractiveness: 9,
                            Unfamiliar_Name_List: [
                                "_guy with yellow glasses",
                                "fuckboy"
                            ],
                            Description_List: [
                                "a guy with a white t-shirt and yellow glasses",
                                "an interesting-looking _guy"
                            ],
                            Tags: [
                                "fuckboy"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "6",
                            Attractiveness: 9,
                            Unfamiliar_Name_List: [
                                "black-haired _guy",
                                "jock"
                            ],
                            Description_List: [
                                "a mean-looking _guy",
                                "a muscular _guy"
                            ],
                            Tags: [
                                "chad",
                                "jock",
                                "bully"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "7",
                            Attractiveness: 8,
                            Unfamiliar_Name_List: [
                                "redhead",
                                "mop-topped redhead"
                            ],
                            Description_List: [
                                "a _guy with a flaming mop of red hair",
                                "a _guy with a mega crop of hair"
                            ],
                            Tags: [
                                "nice",
                                "hipster"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "8",
                            Attractiveness: 10,
                            Unfamiliar_Name_List: [
                                "guy with dark hair",
                                "dark-haired _guy"
                            ],
                            Description_List: [
                                "a _guy with a mysterious expression",
                                "a handsome _guy"
                            ],
                            Tags: [
                                "chad"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "9",
                            Attractiveness: 8,
                            Unfamiliar_Name_List: [
                                "chad",
                                "charming _guy"
                            ],
                            Description_List: [
                                "a tan, unshaven _guy",
                                "a _guy with a lot of stubble"
                            ],
                            Tags: [
                                "chad",
                                "beard",
                                "charming"
                            ],
                            Race: "latin",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "10",
                            Attractiveness: 7,
                            Unfamiliar_Name_List: [
                                "black-haired guy",
                                "guy with black hair"
                            ],
                            Description_List: [
                                "a guy with black hair",
                                "a black-haired guy"
                            ],
                            Tags: [
                                "chad"
                            ],
                            Race: "latin",
                            DickType: "bwc"
                        }
                    ]
                },
                {
                    Type: "coworker",
                    Active: default_genz_coworker_active,
                    NPCs: [{
                            Picture_Name: "1",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "pudgy _guy",
                                "mean-looking _guy"
                            ],
                            Description_List: [
                                "a guy with a buzz cut and a smirk",
                                "a mean-looking _guy with short hair",
                                "a pudgy _guy with a scowl"
                            ],
                            Tags: [
                                "bully",
                                "pudgy",
                                "mean",
                                "chubby"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "2",
                            Attractiveness: 8,
                            Unfamiliar_Name_List: [
                                "simple-looking _guy",
                                "_guy with a mustache"
                            ],
                            Description_List: [
                                "a _guy with a nice smile",
                                "a chill-looking dude with a mustache"
                            ],
                            Tags: [
                                "nice",
                                "chill",
                                "gentleman"
                            ],
                            Race: "",
                            DickType: ""
                        },
                        {
                            Picture_Name: "3",
                            Attractiveness: 9,
                            Unfamiliar_Name_List: [
                                "tall _guy with a chiseled appearance",
                                "jock _guy in a Hawaiian shirt"
                            ],
                            Description_List: [
                                "a _guy with a confident grin",
                                "a chad-like _guy in a stylish tropical shirt",
                                "a tall dude who looks like he just came back from a beach vacation",
                                "a slick-looking _guy in a Hawaiian shirt",
                                "a confident and attractive _guy in a tropical shirt",
                                "a tanned jock with slicked-back hair",
                                "a muscular _guy in a Hawaiian shirt",
                                "a handsome jock with a chiseled jawline",
                                "a tall and stylish dude in a Hawaiian shirt",
                                "a surfer-looking _guy with slicked-back hair"
                            ],
                            Tags: [
                                "jock",
                                "bully"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "4",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "ambitious _guy",
                                "well-dressed _guy"
                            ],
                            Description_List: [
                                "a young guy in a business suit",
                                "a _guy with a brown tie and combed hair",
                                "a smug-looking dude in a blue suit"
                            ],
                            Tags: [
                                "smug",
                                "ambitious",
                                "well-dressed",
                                "nerd"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "5",
                            Attractiveness: 8,
                            Unfamiliar_Name_List: [
                                "hipster",
                                "_guy with glasses"
                            ],
                            Description_List: [
                                "a _guy with a floral shirt and black tie",
                                "a blonde _guy with combed hair and glasses"
                            ],
                            Tags: [
                                "hipster",
                                "handsome",
                                "disinterested",
                                "glasses",
                                "lazy"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "6",
                            Attractiveness: 2,
                            Unfamiliar_Name_List: [
                                "chubby _guy",
                                "_guy with a quizzical expression",
                                "heavyset _guy",
                                "chubby _guy with a serious look",
                                "a slightly puzzled-looking _guy"
                            ],
                            Description_List: [
                                "a _guy with slicked brown hair",
                                "a _guy with a chubby face and combed hair"
                            ],
                            Tags: [
                                "chubby",
                                "serious",
                                "puzzled"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "7",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "smart-looking _guy",
                                "serious _guy"
                            ],
                            Description_List: [
                                "a _guy with glasses and a clean-shaven face",
                                "a blonde _guy with a brown shirt"
                            ],
                            Tags: [
                                "intelligent",
                                "judgmental",
                                "nerd",
                                "glasses"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "8",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "smart-looking _guy",
                                "serious _guy"
                            ],
                            Description_List: [
                                "a _guy with glasses and longer blonde hair, wearing suspenders and a white shirt",
                                "an intelligent-looking _guy with a quizzical expression"
                            ],
                            Tags: [
                                "intelligent",
                                "judgmental",
                                "nerd",
                                "glasses"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "9",
                            Attractiveness: 8,
                            Unfamiliar_Name_List: [
                                "cocky-looking _guy",
                                "arrogant _guy"
                            ],
                            Description_List: [
                                "a guy who thinks he's God's gift to women",
                                "a smirking, confident-looking _guy"
                            ],
                            Tags: [
                                "fuckboy",
                                "cocky",
                                "arrogant",
                                "creepy",
                                "ambitious"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "10",
                            Attractiveness: 7,
                            Unfamiliar_Name_List: [
                                "suave cuban _guy",
                                "colorful _guy"
                            ],
                            Description_List: [
                                "a charming gentleman with thick eyebrows",
                                "a slick _guy with a serious expression"
                            ],
                            Tags: [
                                "kind",
                                "gentleman",
                                "suave"
                            ],
                            Race: "latin",
                            DickType: "bwc"
                        }
                    ]
                },
                {
                    Type: "lad",
                    Active: default_genz_lad_active,
                    NPCs: [{
                            Picture_Name: "1",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "_guy with glasses",
                                "_guy with flowing hair and glasses"
                            ],
                            Description_List: [
                                "a _guy with glasses",
                                "a smug-looking _guy with glasses and flowing hair"
                            ],
                            Tags: [
                                "nerd",
                                "smug"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "2",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "brown-haired _guy",
                                "smiling _guy"
                            ],
                            Description_List: [
                                "a _guy who looks like he smiles too much",
                                "a chill-looking _guy"
                            ],
                            Tags: [],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "3",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "ginger",
                                "ginger with glasses"
                            ],
                            Description_List: [
                                "a _guy with red hair and glasses",
                                "a _guy with red hair and glasses"
                            ],
                            Tags: [
                                "nerd"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "4",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "_guy with messy hair",
                                "smelly-looking _guy"
                            ],
                            Description_List: [
                                "a _guy with messy brown hair",
                                "a _guy with messy hair and bushy eyebrows"
                            ],
                            Tags: [],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "5",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "blonde bearded _guy",
                                "bearded _guy"
                            ],
                            Description_List: [
                                "a guy with red hair and sad eyes",
                                "a normal-looking guy"
                            ],
                            Tags: [
                                "beard"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "6",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "relaxed-looking _guy",
                                "tan _guy"
                            ],
                            Description_List: [
                                "a very relaxed-looking _guy",
                                "chill _guy"
                            ],
                            Tags: [],
                            Race: "latin",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "7",
                            Attractiveness: 0,
                            Unfamiliar_Name_List: [
                                "summery _guy",
                                "blonde _guy"
                            ],
                            Description_List: [
                                "a _guy with blow-dried blonde hair",
                                "a _guy with bleach-blonde hair",
                                "a tan _guy with blonde hair"
                            ],
                            Tags: [
                                "cool"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "8",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "latino hipster",
                                "hipster guy with glasses",
                                "_guy with glasses"
                            ],
                            Description_List: [
                                "a _guy dressed like a hipster",
                                "a _guy with glasses"
                            ],
                            Tags: [],
                            Race: "latin",
                            DickType: ""
                        },
                        {
                            Picture_Name: "9",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "tough-looking _guy",
                                "_guy with a blonde mop-top"
                            ],
                            Description_List: [
                                "a sporty-looking _guy",
                                "a _guy who looks like a highschool bully"
                            ],
                            Tags: [
                                "bully",
                                "jock"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "10",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "smug-looking _guy",
                                "freckled _guy"
                            ],
                            Description_List: [
                                "a _guy who looks a bit annoying",
                                "a freckled _guy with red hair"
                            ],
                            Tags: [
                                "annoying",
                                "smug"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        }
                    ]
                }
            ]
        },
        {
            Generation: "millenial",
            Active: default_millenial_active,
            First_Names: [
                "James",
                "John",
                "Robert",
                "Michael",
                "William",
                "David",
                "Richard",
                "Joseph",
                "Thomas",
                "Charles",
                "Chris",
                "Daniel",
                "Matthew",
                "Anthony",
                "Donald",
                "Mark",
                "Steve",
                "Andrew",
                "Josh",
                "Jason",
                "Eric",
                "Justin",
                "Scott",
                "Ben",
                "Alex",
                "Timothy",
                "Larry",
                "Jeffrey",
                "Adam",
                "Aaron",
                "Brandon",
                "Brian",
                "Cody",
                "Colin",
                "Connor",
                "Derek",
                "Dustin",
                "Dylan",
                "Ethan",
                "Frank",
                "Garrett",
                "Gregory",
                "Jacob",
                "Jared",
                "Jesse",
                "Jordan",
                "Kyle",
                "Kevin",
                "Logan",
                "Lucas",
                "Marcus",
                "Max",
                "Miles",
                "Mitchell",
                "Nathan",
                "Nicholas",
                "Patrick",
                "Paul",
                "Peter",
                "Philip",
                "Ryan",
                "Samuel",
                "Sean",
                "Shawn",
                "Spencer",
                "Stephen",
                "Taylor",
                "Trevor",
                "Travis",
                "Tyler",
                "Victor",
                "Vincent",
                "Wesley",
                "Wyatt",
                "Zachary"
            ],
            Hand_Description: [
                "smooth",
                "firm",
                "manly",
                "masculine",
                "clammy",
                "sweaty"
            ],
            NPC_Type_Map: [{
                    Type: "bad",
                    Active: default_millenial_bad_active,
                    NPCs: [{
                            Picture_Name: "1",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "oily-haired _guy",
                                "brown-haired _guy"
                            ],
                            Description_List: [
                                "a _guy with glasses",
                                "a _guy with glasses and oily hair"
                            ],
                            Tags: [
                                "nerd"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "2",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "_guy with a hat",
                                "_guy with a hat and glasses"
                            ],
                            Description_List: [
                                "a _guy with a vaguely annoying expresssion",
                                "a _guy who looks like a bit of a stoner"
                            ],
                            Tags: [
                                "hat",
                                "glasses",
                                "annoying"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "3",
                            Attractiveness: 2,
                            Unfamiliar_Name_List: [
                                "chubby _guy",
                                "nerdy _guy"
                            ],
                            Description_List: [
                                "a fairly chubby _guy with glasses",
                                "a _guy with glasses and a rotund waist"
                            ],
                            Tags: [
                                "nerd",
                                "chubby"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "4",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "nerd",
                                "creepy guy"
                            ],
                            Description_List: [
                                "a creepy-looking guy with dark glasses",
                                "a weird guy with freckles"
                            ],
                            Tags: [
                                "nerd",
                                "creepy"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "5",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "_guy with a mustache",
                                "blue-eyed _guy"
                            ],
                            Description_List: [
                                "a _guy with a mustache",
                                "a _guy sporting a faint mustache"
                            ],
                            Tags: [],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "6",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "chubby _guy",
                                "creepy _guy"
                            ],
                            Description_List: [
                                "a chubby-looking _guy",
                                "a fairly chubby _guy with a neckbeard"
                            ],
                            Tags: [
                                "chubby",
                                "beard",
                                "nerd"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "7",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "nerd",
                                "annoying guy"
                            ],
                            Description_List: [
                                "a nerdy guy",
                                "an annoying-looking guy with glasses"
                            ],
                            Tags: [
                                "nerd",
                                "annoying"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "8",
                            Attractiveness: 3,
                            Unfamiliar_Name_List: [
                                "weird guy",
                                "strange guy"
                            ],
                            Description_List: [
                                "a weird-smelling guy",
                                "a guy who looks like he has poor hygiene"
                            ],
                            Tags: [
                                "smelly",
                                "annoying",
                                "beard"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "9",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "tan _guy",
                                "curly-haired _guy"
                            ],
                            Description_List: [
                                "a strangely oily guy",
                                "a guy with large ears"
                            ],
                            Tags: [],
                            Race: "latin",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "10",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "oily-haired _guy",
                                "tan _guy"
                            ],
                            Description_List: [
                                "a guy with slick hair",
                                "a guy with an oily head of hair"
                            ],
                            Tags: [
                                "annoying"
                            ],
                            Race: "latin",
                            DickType: "bwc"
                        }
                    ]
                },
                {
                    Type: "chad",
                    Active: default_millenial_chad_active,
                    NPCs: [{
                            Picture_Name: "1",
                            Attractiveness: 8,
                            Unfamiliar_Name_List: [
                                "blonde-haired dude",
                                "smiling guy"
                            ],
                            Description_List: [
                                "a _guy with slick hair and a confident smile",
                                "a _guy who just exudes confidence"
                            ],
                            Tags: [
                                "chad"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "2",
                            Attractiveness: 10,
                            Unfamiliar_Name_List: [
                                "chad",
                                "luxurious man",
                                "total gentleman"
                            ],
                            Description_List: [
                                "a _guy with long, curly hair",
                                "a tanned _guy with long black hair"
                            ],
                            Tags: [
                                "skinny",
                                "chad",
                                "gentleman"
                            ],
                            Race: "latin",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "3",
                            Attractiveness: 7,
                            Unfamiliar_Name_List: [
                                "smart-looking _guy",
                                "_guy who looks like a tech nerd"
                            ],
                            Description_List: [
                                "a guy with a big chin",
                                "a _guy who looks like he's gonna tell you about his NFT project"
                            ],
                            Tags: [
                                "chad",
                                "nerd",
                                "smelly"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "4",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "purple-haired _guy",
                                "_guy with purple hair"
                            ],
                            Description_List: [
                                "a _guy with a wry smile and purple hair",
                                "a shortish _guy"
                            ],
                            Tags: [
                                "chad",
                                "charming",
                                "short"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "5",
                            Attractiveness: 10,
                            Unfamiliar_Name_List: [
                                "jock",
                                "total jock"
                            ],
                            Description_List: [
                                "a tall, muscular guy",
                                "a big, muscular guy"
                            ],
                            Tags: [
                                "chad",
                                "jock",
                                "beard",
                                "bully"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "6",
                            Attractiveness: 7,
                            Unfamiliar_Name_List: [
                                "brown-haired guy",
                                "relaxed _guy"
                            ],
                            Description_List: [
                                "a guy who looks like he's always calm",
                                "a _guy wearing sunglasses"
                            ],
                            Tags: [
                                "chad"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "7",
                            Attractiveness: 7,
                            Unfamiliar_Name_List: [
                                "blue-eyed _guy",
                                "mean-looking _guy"
                            ],
                            Description_List: [
                                "a brown-haired _guy"
                            ],
                            Tags: [
                                "bully"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "8",
                            Attractiveness: 9,
                            Unfamiliar_Name_List: [
                                "ginger",
                                "blue-eyed _guy"
                            ],
                            Description_List: [
                                "a blue-eyed ginger",
                                "a _guy with blue eyes"
                            ],
                            Tags: [
                                "chad",
                                "charming"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "9",
                            Attractiveness: 7,
                            Unfamiliar_Name_List: [
                                "bearded _guy",
                                "_guy with a beard",
                                "blue-eyed _guy"
                            ],
                            Description_List: [
                                "a tall guy with a beard and blue eyes",
                                "a tall, bearded _guy"
                            ],
                            Tags: [
                                "chad",
                                "jock",
                                "beard"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "10",
                            Attractiveness: 7,
                            Unfamiliar_Name_List: [
                                "slick guy",
                                "suave man"
                            ],
                            Description_List: [
                                "a suave-looking manwhore",
                                "a stylish fuckboy"
                            ],
                            Tags: [
                                "chad",
                                "fuckboy",
                                "beard"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        }
                    ]
                },
                {
                    Type: "coworker",
                    Active: default_millenial_coworker_active,
                    NPCs: [{
                            Picture_Name: "1",
                            Attractiveness: 8,
                            Unfamiliar_Name_List: [
                                "suave businessman",
                                "well-groomed guy"
                            ],
                            Description_List: [
                                "a _guy in a sharp blue suit with a confident grin",
                                "a _guy with a trimmed beard and piercing gaze"
                            ],
                            Tags: [
                                "chad",
                                "beard",
                                "suit"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "2",
                            Attractiveness: 10,
                            Unfamiliar_Name_List: [
                                "blonde businessman",
                                "blonde _guy",
                                "nice-looking _guy",
                                "golden-haired _guy"
                            ],
                            Description_List: [
                                "a _guy with blue eyes and a clean-cut appearance",
                                "a _guy who looks like he just walked out of a magazine",
                                "a _guy with a trim beard and a charming smile",
                                "a _guy with a confident aura and a winning grin",
                                "a _guy with a suave look and a gentle manner",
                                "a _guy with a polished appearance and a warm personality",
                                "a _guy with a friendly demeanor and an attractive face",
                                "a _guy with a professional look and an affable attitude"
                            ],
                            Tags: [
                                "nice",
                                "gentleman"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "3",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "chubby _guy",
                                "intellectual-looking _guy"
                            ],
                            Description_List: [
                                "a _guy with a receding hairline and chunky 80s glasses",
                                "a _guy who looks like he belongs in a vintage bookstore"
                            ],
                            Tags: [
                                "smart",
                                "intellectual",
                                "chubby",
                                "nostalgic"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "4",
                            Attractiveness: 9,
                            Unfamiliar_Name_List: [
                                "blonde _guy",
                                "sleazy-looking _guy"
                            ],
                            Description_List: [
                                "a guy with chiseled jawline and piercing blue eyes",
                                "a guy with high cheekbones and a little smile"
                            ],
                            Tags: [
                                "chad",
                                "creepy",
                                "bully",
                                "ambitious"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "5",
                            Attractiveness: 9,
                            Unfamiliar_Name_List: [
                                "attractive Asian _guy",
                                "smart-looking _guy"
                            ],
                            Description_List: [
                                "a _guy with a chiseled jawline and a clean haircut",
                                "a _guy who looks like he could be a model"
                            ],
                            Tags: [
                                "chad",
                                "ambitious"
                            ],
                            Race: "asian",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "6",
                            Attractiveness: 8,
                            Unfamiliar_Name_List: [
                                "suave-looking _guy",
                                "latin _guy"
                            ],
                            Description_List: [
                                "a guy with a strong jawline and a charming smile",
                                "a _guy who looks like he just stepped out of a fashion magazine"
                            ],
                            Tags: [
                                "chad",
                                "latin",
                                "suave",
                                "slick",
                                "jock",
                                "fuckboy",
                                "playboy"
                            ],
                            Race: "latin",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "7",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "ginger",
                                "blue-eyed _guy"
                            ],
                            Description_List: [
                                "a blue-eyed ginger",
                                "a _guy with blue eyes"
                            ],
                            Tags: [
                                "it",
                                "nerd"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "8",
                            Attractiveness: 2,
                            Unfamiliar_Name_List: [
                                "chubby _guy with buzzcut",
                                "chunky _guy"
                            ],
                            Description_List: [
                                "a guy with a crew cut and a slight frown",
                                "a _guy who looks like he's about to start a fight"
                            ],
                            Tags: [
                                "bully",
                                "chubby",
                                "fuckboy",
                                "breeder"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "9",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "young _guy",
                                "brooding _guy"
                            ],
                            Description_List: [
                                "a _guy with a dark expression, you can't quite tell what's on his mind",
                                "a _guy who looks like he's lost in thought"
                            ],
                            Tags: [
                                "brooding",
                                "intense"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "10",
                            Attractiveness: 10,
                            Unfamiliar_Name_List: [
                                "clean-cut _guy",
                                "well-groomed _guy"
                            ],
                            Description_List: [
                                "a _guy with a charming smile and checkered shirt",
                                "a _guy who looks like he stepped out of a men's magazine"
                            ],
                            Tags: [
                                "chad",
                                "friendly",
                                "ambitious"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        }
                    ]
                },
                {
                    Type: "lad",
                    Active: default_millenial_lad_active,
                    NPCs: [{
                            Picture_Name: "1",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "bald _guy",
                                "smiling bald _guy"
                            ],
                            Description_List: [
                                "a smiling bald _guy",
                                "a clean-cut bald guy"
                            ],
                            Tags: [
                                "bald",
                                "smells good"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "2",
                            Attractiveness: 4,
                            Unfamiliar_Name_List: [
                                "balding _guy",
                                "_guy with a scruffy beard"
                            ],
                            Description_List: [
                                "a nicely-dressed guy with scruffy facial hair",
                                "a balding guy"
                            ],
                            Tags: [
                                "beard"
                            ],
                            Race: "white",
                            DickType: "white"
                        },
                        {
                            Picture_Name: "3",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "greasy guy",
                                "_guy with soulful eyes"
                            ],
                            Description_List: [
                                "a guy with a faint mustache and goatee",
                                "a guy with an unreadable expression"
                            ],
                            Tags: [
                                "beard"
                            ],
                            Race: "latin",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "4",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "brown-haired _guy",
                                "normal dude"
                            ],
                            Description_List: [
                                "a normal-looking guy",
                                "a guy with nicely combed hair",
                                "a smiling _guy"
                            ],
                            Tags: [],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "5",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "brown-haired guy",
                                "normal dude"
                            ],
                            Description_List: [
                                "a guy who looks easily upset",
                                "a _guy with a scruffy goatee"
                            ],
                            Tags: [
                                "bully",
                                "beard",
                                "jock"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "6",
                            Attractiveness: 2,
                            Unfamiliar_Name_List: [
                                "bearded guy",
                                "guy with beard"
                            ],
                            Description_List: [
                                "a friendly, normal looking guy",
                                "a guy with an oily face and a beard",
                                "a _guy with bad B.O."
                            ],
                            Tags: [
                                "nerd",
                                "smelly",
                                "beard"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "7",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "smug-looking guy",
                                "confident _guy"
                            ],
                            Description_List: [
                                "a _guy with a smug smile",
                                "a _guy with a smug grin"
                            ],
                            Tags: [
                                "fuckboy"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "8",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "brown-haired _guy",
                                "dreamer"
                            ],
                            Description_List: [
                                "a _guy with a scruffy beard",
                                "a _guy with a scruffy appearance"
                            ],
                            Tags: [
                                "smelly",
                                "beard"
                            ],
                            Race: "white",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "9",
                            Attractiveness: 6,
                            Unfamiliar_Name_List: [
                                "_guy with glasses",
                                "respectable guy",
                                "clean-cut _guy"
                            ],
                            Description_List: [
                                "a clean-cut _guy",
                                "an asian guy"
                            ],
                            Tags: [],
                            Race: "asian",
                            DickType: "bwc"
                        },
                        {
                            Picture_Name: "10",
                            Attractiveness: 5,
                            Unfamiliar_Name_List: [
                                "brown-haired dude",
                                "normal guy"
                            ],
                            Description_List: [
                                "a normal-looking guy",
                                "a guy who looks pretty normal",
                                "a _guy with big eyes and a big smile"
                            ],
                            Tags: [],
                            Race: "white",
                            DickType: "bwc"
                        }
                    ]
                }
            ]
        }

    ]
}

// From base game

function toMap(e) {
    var s = new Map;
    for (var t in e) {
        if (void 0 === e[t]) {
            var a = Object.keys(e);
            throw Error("Setting an undefined value for '" + t + "' in a map with keys " + a)
        }
        s.set(t + "", e[t])
    }
    return s
}

// New functions

window.GE.guy_database = new Map;

var buildNPC = function (Picture_Name, Attractiveness, Unfamiliar_Name_List, Description_List, Tags, Race, DickType) {
    return toMap({
        "picture" : Picture_Name,
        "looks" : Attractiveness,
        "unfamiliar names" : Unfamiliar_Name_List,
        "descriptions" : Description_List,
        "tags" : Tags,
        "race" : Race,
        "dicktype" : DickType
    });

};

function add_npc_to_database(generate_npcs) {
    const generation_map = generate_npcs.NPC_Generation_Map;
    generation_map.forEach((generation_filter) => {
        if (generation_filter.Active) {
            const generation = generation_filter.Generation;
            if (!window.GE.guy_database.has(generation)) {
                const first_names = generation_filter.First_Names;
                const hand_description = generation_filter.Hand_Description;
                window.GE.guy_database.set(generation, new Map);
                window.GE.guy_database.get(generation).set("first names", first_names);
                window.GE.guy_database.get(generation).set("hands", hand_description);
            }
            generation_filter.NPC_Type_Map.forEach((npc_type_filter) => {
                if (npc_type_filter.Active) {
                    const npc_type = npc_type_filter.Type;
                    if (!window.GE.guy_database.get(generation).has(npc_type)) {
                        window.GE.guy_database.get(generation).set(npc_type, new Array);
                    }
                    npc_type_filter.NPCs.forEach((NPC_stats) => {
                        window.GE.guy_database.get(generation).get(npc_type).push(buildNPC(NPC_stats.Picture_Name,
                            NPC_stats.Attractiveness,
                            NPC_stats.Unfamiliar_Name_List,
                            NPC_stats.Description_List,
                            NPC_stats.Tags,
                            NPC_stats.Race,
                            NPC_stats.DickType));
                    });
                }
            });
        }
    });
}


add_npc_to_database(default_generate_npcs)

if (modded_generate_npcs_list !== null) {
    modded_generate_npcs_list.forEach((modded_generate_npcs) => {
        add_dicks_to_database(modded_generate_npcs);
    });
}

console.log(window.GE.guy_database);