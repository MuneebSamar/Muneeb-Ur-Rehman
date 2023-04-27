export const navList = [
    { name: "Home", link: "#section-home" },
    { name: "Portfolio", link: "#section-portfolio" },
    { name: "Resume", link: "#section-resume" },
    { name: "About", link: "#section-about" },
    { name: "Contact", link: "#section-contact" },
  ];

export const FormsJson = [
    {
        title: 'Featured Portfolio',
        name: 'featured_portfolio',
        isMultiple: true,
        form: [
            { title: '', name: 'featured_portfolio', type: 'multi', default: {
                title: '',
                tag: '',
                date: '',
                img: '',
            }, row: [
                { title: 'Title', name: 'title', type: 'text', required: true, col: "col-2" },
                { title: 'Tag', name: 'tag', type: 'text', required: true, col: "col-2" },
                { title: 'Date', name: 'date', type: 'date', required: true, col: "col-2" },
                { title: 'Image', name: 'img', type: 'text', required: true, col: "col-2" },
            ]},
        ],
    },
     {
        title: 'resume',
        name: 'resume',
        isMultiple: true,
        form: [
            { title: '', name: 'resume', type: 'multi', default: {
                title: '',
                date: '',
                institute: '',
                description: '',
            }, row: [
                { title: 'Title', name: 'title', type: 'text', required: true, col: "col-2" },
                { title: 'Date', name: 'date', type: 'date', required: true, col: "col-2" },
                { title: 'Institute', name: 'institute', type: 'text', required: true, col: "col-2" },
                { title: 'Description', name: 'description', type: 'text', required: true, col: "col-2" },
            ]},
        ],
    },
    {
        title: 'Testimonial',
        name: 'testimonial',
        isMultiple: true,
        form: [
            { title: '', name: 'testimonial', type: 'multi', default: {
                name: '',
                description: '',
                Designation: '',
                img: '',
            }, row: [
                { title: 'Name', name: 'name', type: 'text', required: true, col: "col-2" },
            { title: 'Description', name: 'description', type: 'text', required: true, col: "col-2" },
            { title: 'Designation', name: 'designation', type: 'text', required: true, col: "col-2" },
            { title: 'Image', name: 'img', type: 'text', required: true, col: "col-2" },
            ]},
        ],
    },
    {
        title: 'Services',
        name: 'services',
        isMultiple: true,
        form: [
            { title: '', name: 'services', type: 'multi', default: {
                title: '',
                description: '',
                img: '',
            }, row: [
                { title: 'Title', name: 'title', type: 'text', required: true, col: "col-2" },
            { title: 'Description', name: 'description', type: 'text', required: true, col: "col-2" },
            { title: 'Image', name: 'icon', type: 'text', required: true, col: "col-2" },
            ]},
        ],
    },
    {
        title: 'Blogs',
        name: 'blogs',
        isMultiple: true,
        form: [
            { title: '', name: 'blogs', type: 'multi', default: {
                title: '',
                description: '',
                img: '',
                date: '',
                comments: '',
            }, row: [
                { title: 'Title', name: 'title', type: 'text', required: true, col: "col-2" },
            { title: 'Description', name: 'description', type: 'text', required: true, col: "col-2" },
            { title: 'Image', name: 'img', type: 'text', required: true, col: "col-2" },
            { title: 'Date', name: 'date', type: 'date', required: true, col: "col-2" },
            { title: 'Comments', name: 'comments', type: 'text', required: true, col: "col-2" },
            ]},
        ]
    },
    {
        title: "About", 
        name: "aboutData",
        form: [
            { title: "Title", name: "title", type: "text", required: true },
            { title: "Description", name: "description", type: "text", required: true },
            { title: "Image", name: "img", type: "text", required: true },
        ],
    },
     {
        title: "Contact",
        name: "contactData",
        form: [
            { title: "Title", name: "title", type: "text", required: true },
            { title: "Description", name: "description", type: "text", required: true },
            { title: "Image", name: "img", type: "text", required: true },
        ],
    },
]


export const featuredPortfolio = [
    {
        id: 1,
        title: "Square Box Mockup",
        img: "p1.jpg",
        tag: "mockup",
    },
    {
        id: 2,
        title: "Product Box Package Mockup",
        img: "p2.jpg",
        tag: "mockup",
    },{
        id: 3,
        title: "Creative Package Design",
        img: "p3.jpg",
        tag: "packaging",
    },{
        id: 4,
        title: "Pakage Brand",
        img: "p4.jpg",
        tag: "packaging",
    },{
        id: 5,
        title: "Isometric 3D Extrusion",
        img: "p5.jpg",
        tag: "typography",
    },{
        id: 6,
        title: "White Space Photography",
        img: "p6.jpg",
        tag: "photography",
    },
];

export const resumeData = {
    education: [
        {
            id: 1,
            date: "March 2015 - Present",
            title: "Masteral in Information Technology",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
            institute: "UP Open University",
        },{
            id: 2,
            date: "March 2015 - Present",
            title: "Masteral in Information Technology",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
            institute: "UP Open University",
        },{
            id: 3,
            date: "March 2015 - Present",
            title: "Masteral in Information Technology",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
            institute: "UP Open University",
        },{
            id: 4,
            date: "March 2015 - Present",
            title: "Masteral in Information Technology",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
            institute: "UP Open University",
        },
    ],
    experience: [
        {
            id: 1,
            date: "March 2015 - Present",
            title: "Lead Product Designer",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
            compnay: "Facebook",
        },{
            id: 2,
            date: "March 2015 - Present",
            title: "Lead Product Designer",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
            compnay: "Google",
        },{
            id: 3,
            date: "March 2015 - Present",
            title: "Lead Product Designer",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
            compnay: "Twitter",
        },{
            id: 4,
            date: "March 2015 - Present",
            title: "Lead Product Designer",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
            compnay: "Instagram",
        },
    ],
}

export const aboutData = {
    short_description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    img: "image_1.jpg",
    cv: "cv.pdf",
}

export const testimonial = [
    {
        id: 1,
        img: "person_1.jpg",
        name: "Ethan McCown",
        designation: "CEO, XYZ Inc.",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },{
        id: 2,
        img: "person_2.jpg",
        name: "Ethan McCown",
        designation: "CEO, XYZ Inc.",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },{
        id: 3,
        img: "person_3.jpg",
        name: "Ethan McCown",
        designation: "CEO, XYZ Inc.",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },{
        id: 4,
        img: "person_4.jpg",
        name: "Ethan McCown",
        designation: "CEO, XYZ Inc.",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    }
]

export const services = [
    {
        id: 1,
        icon: "icon-browser2",
        title: "Web Design",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },{
        id: 2,
        icon: "icon-presentation",
        title: "Search Engine Optimization",
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },{
        id: 3,
        icon: "icon-video2",
        title: "Video Editing",
        description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    }
]

export const blogs = [
    {
        id: 1,
        img: "post_1.jpg",
        title: "Creative Product Designer From Facebook",
        description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
        date: "March 15, 2018",
        comments: "3",
    },{
        id: 2,
        img: "post_2.jpg",
        title: "Creative Product Designer From Facebook",
        description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
        date: "March 15, 2018",
        comments: "3",
    },{
        id: 3,
        img: "post_3.jpg",
        title: "Creative Product Designer From Facebook",
        description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
        date: "March 15, 2018",
        comments: "3",
    }
]

export const contacts = {
    contact : {
        email: "muneebsamar13@gmial.com",
        phone: "+92 340 4671591",
        address: "198 West 21th Street, \n Suite 721 New York NY 10016",
    },
    social: {
        facebook: "https://www.facebook.com/profile.php?id=100034567837311",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/in/muneeb-ur-rehman-b7a582240/",
    }
}
