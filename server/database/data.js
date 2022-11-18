const planets = [
    {
        "basicDetails":
        {
            "mass": "0.364",
            "diameter": 3032,
            "density": 339,
            "gravity": "21.1",
            "lengthOfDay": "4222.6",
            "distanceFromSun": "36.0",
            "meanTemperature": 333,
            "numberOfMoons": 0,
            "ringSystem": false,
            "globalMagneticField": true
        }
        ,
        "description": "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.",
        "id": 1,
        "imgSrc":
        {
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/1024px-Mercury_in_true_color.jpg",
            "imgDescription": "This is a cropped bottom right image from the original four image mosaic PIA11364: Mercury's 'True' Color is in the Eye of the Beholder.",
            "source": "Wikipedia",
            "sourceLink": "https://en.wikipedia.org/wiki/Mercury_(planet)"
        }
        ,
        "name": "Mercury",
        "planetOrder": "1",
        "source": "NASA (Dr. David R. Williams)",
        "sourceLink": "https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_british.html"
    },
    {
        "basicDetails":
        {
            "mass": "5.37",
            "diameter": 7521,
            "density": 327,
            "gravity": "29.1",
            "lengthOfDay": "2802.0",
            "distanceFromSun": "67.2",
            "meanTemperature": 867,
            "numberOfMoons": 0,
            "ringSystem": false,
            "globalMagneticField": false
        }
        ,
        "description": "Venus is the second planet from the Sun and is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be visible to the naked eye in broad daylight.",
        "id": 2,
        "imgSrc":
        {
            "img": "https://upload.wikimedia.org/wikipedia/commons/5/54/Venus_-_December_23_2016.png",
            "imgDescription": "Processed using ultraviolet (365nm & 283nm) filtered images of Venus taken by Akatsuki on December 23 2016.",
            "source": "Wikipedia",
            "sourceLink": "https://en.wikipedia.org/wiki/Venus"
        }
        ,
        "name": "Venus",
        "planetOrder": "2",
        "source": "NASA (Dr. David R. Williams)",
        "sourceLink": "https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_british.html"
    },
    {
        "basicDetails":
        {
            "mass": "6.58",
            "diameter": 7926,
            "density": 344,
            "gravity": "32.1",
            "lengthOfDay": "24.0",
            "distanceFromSun": "93",
            "meanTemperature": 59,
            "numberOfMoons": 1,
            "ringSystem": false,
            "globalMagneticField": true
        }
        ,
        "description": "Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large volumes of water can be found throughout the Solar System, only Earth sustains liquid surface water.",
        "id": 3,
        "imgSrc":
        {
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg",
            "imgDescription": "Full disk view of the Earth taken on December 7, 1972, by the crew of the Apollo 17 spacecraft en route to the Moon at a distance of about 29,000 kilometres (18,000 mi). It shows Africa, Antarctica, and the Arabian Peninsula.",
            "source": "Wikipedia",
            "sourceLink": "https://en.wikipedia.org/wiki/Earth"
        }
        ,
        "name": "Earth",
        "planetOrder": "3",
        "source": "NASA (Dr. David R. Williams)",
        "sourceLink": "https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_british.html"
    },
    {
        "basicDetails":
        {
            "mass": "0.707",
            "diameter": 4221,
            "density": 246,
            "gravity": "12.1",
            "lengthOfDay": "24.7",
            "distanceFromSun": "141.6",
            "meanTemperature": -85,
            "numberOfMoons": 2,
            "ringSystem": false,
            "globalMagneticField": false
        }
        ,
        "description": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In the English language, Mars is named for the Roman god of war.",
        "id": 4,
        "imgSrc":
        {
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tharsis_and_Valles_Marineris_-_Mars_Orbiter_Mission_%2830055660701%29.png/1024px-Tharsis_and_Valles_Marineris_-_Mars_Orbiter_Mission_%2830055660701%29.png",
            "imgDescription": "True-color image of Mars acquired by India's Mars Orbiter mission on October 10, 2014, from an altitude of 76000 km. Image Credit: ISRO / ISSDC / Justin Cowart",
            "source": "Wikipedia",
            "sourceLink": "https://en.wikipedia.org/wiki/Mars"
        }
        ,
        "name": "Mars",
        "planetOrder": "4",
        "source": "NASA (Dr. David R. Williams)",
        "sourceLink": "https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_british.html"
    },
    {
        "basicDetails":
        {
            "mass": "2092",
            "diameter": 88846,
            "density": 83,
            "gravity": "75.9",
            "lengthOfDay": "9.9",
            "distanceFromSun": "483.7",
            "meanTemperature": -166,
            "numberOfMoons": 79,
            "ringSystem": true,
            "globalMagneticField": true
        }
        ,
        "description": "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.",
        "id": 5,
        "imgSrc":
        {
            "img": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Jupiter_New_Horizons.jpg",
            "imgDescription": "The New Horizons Long Range Reconnaissance Imager (LORRI) took this 2-millisecond exposure of Jupiter at 04:41:04 UTC on January 24, 2007. The spacecraft was 57 million kilometers (35.3 million miles) from Jupiter, closing in on the giant planet at 41,500 miles (66,790 kilometers) per hour.",
            "source": "Wikipedia",
            "sourceLink": "https://en.wikipedia.org/wiki/Jupiter"
        }
        ,
        "name": "Jupiter",
        "planetOrder": "5",
        "source": "NASA (Dr. David R. Williams)",
        "sourceLink": "https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_british.html"
    },
    {
        "basicDetails":
        {
            "mass": "626",
            "diameter": 74897,
            "density": 43,
            "gravity": "29.4",
            "lengthOfDay": "10.7",
            "distanceFromSun": "889.8",
            "meanTemperature": -220,
            "numberOfMoons": 82,
            "ringSystem": true,
            "globalMagneticField": true
        }
        ,
        "description": "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.",
        "id": 6,
        "imgSrc":
        {
            "img": "https://upload.wikimedia.org/wikipedia/commons/2/29/Saturn_Storm.jpg",
            "imgDescription": "The huge storm (great white spot) churning through the atmosphere in Saturn's northern hemisphere overtakes itself as it encircles the planet in this true-color view from NASA’s Cassini spacecraft. Image credit: NASA/JPL-Caltech/SSI",
            "source": "Wikipedia",
            "sourceLink": "https://en.wikipedia.org/wiki/Jupiter"
        }
        ,
        "name": "Saturn",
        "planetOrder": "6",
        "source": "NASA (Dr. David R. Williams)",
        "sourceLink": "https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_british.html"
    },
    {
        "basicDetails":
        {
            "mass": "95.7",
            "diameter": 31763,
            "density": 79,
            "gravity": "28.5",
            "lengthOfDay": "17.2",
            "distanceFromSun": "1781.5",
            "meanTemperature": -320,
            "numberOfMoons": 27,
            "ringSystem": true,
            "globalMagneticField": true
        }
        ,
        "description": "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus (Caelus), who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn).",
        "id": 7,
        "imgSrc":
        {
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg/1024px-Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg",
            "imgDescription": "This is an image of the planet Uranus taken by the spacecraft Voyager 2 in 1986. The Voyager project is managed for NASA by the Jet Propulsion Laboratory.",
            "source": "Wikipedia",
            "sourceLink": "https://en.wikipedia.org/wiki/Jupiter"
        }
        ,
        "name": "Uranus",
        "planetOrder": "7",
        "source": "NASA (Dr. David R. Williams)",
        "sourceLink": "https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_british.html"
    },
    {
        "basicDetails":
        {
            "mass": "113",
            "diameter": 30775,
            "density": 102,
            "gravity": "36.0",
            "lengthOfDay": "16.1",
            "distanceFromSun": "2805.5",
            "meanTemperature": -330,
            "numberOfMoons": 14,
            "ringSystem": true,
            "globalMagneticField": true
        }
        ,
        "description": "Neptune is the eighth planet from the Sun and the farthest known solar planet. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",
        "id": 8,
        "imgSrc":
        {
            "img": "https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
            "imgDescription": "Voyager 2 Narrow Angle Camera image of Neptune taken on August 20, 1989 as the spacecraft approached the planet for a flyby on August 25.",
            "source": "Wikipedia",
            "sourceLink": "https://en.wikipedia.org/wiki/Jupiter"
        }
        ,
        "name": "Neptune",
        "planetOrder": "8",
        "source": "NASA (Dr. David R. Williams)",
        "sourceLink": "https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_british.html"
    }
]

module.exports = planets 