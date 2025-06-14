const quizData = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "Wo", correct: false },
            { text: "Wa", correct: false },
            { text: "H2O", correct: true },
            { text: "Ox", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Won", correct: false },
            { text: "Yen", correct: true },
            { text: "Dollar", correct: false },
            { text: "Euro", correct: false }
        ]
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: [
            { text: "Nucleus", correct: false },
            { text: "Mitochondria", correct: true },
            { text: "Ribosome", correct: false },
            { text: "Endoplasmic Reticulum", correct: false }
        ]
    },
    {
        question: "What year did World War II end?",
        answers: [
            { text: "1943", correct: false },
            { text: "1945", correct: true },
            { text: "1950", correct: false },
            { text: "1939", correct: false }
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Kangchenjunga", correct: false },
            { text: "Lhotse", correct: false }
        ]
    },
    {
        question: "What is the speed of light in a vacuum?",
        answers: [
            { text: "150,000 km/s", correct: false },
            { text: "300,000 km/s", correct: true },
            { text: "500,000 km/s", correct: false },
            { text: "200,000 km/s", correct: false }
        ]
    },
    {
        question: "What is the first element on the periodic table?",
        answers: [
            { text: "Helium", correct: false },
            { text: "Hydrogen", correct: true },
            { text: "Lithium", correct: false },
            { text: "Oxygen", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Hamlet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "George Bernard Shaw", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Go", correct: false },
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water in Celsius?",
        answers: [
            { text: "90", correct: false },
            { text: "100", correct: true },
            { text: "110", correct: false },
            { text: "0", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "Who invented the telephone?",
        answers: [
            { text: "Thomas Edison", correct: false },
            { text: "Alexander Graham Bell", correct: true },
            { text: "Nikola Tesla", correct: false },
            { text: "Isaac Newton", correct: false }
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Canberra", correct: true },
            { text: "Melbourne", correct: false },
            { text: "Perth", correct: false }
        ]
    },
    {
        question: "What is the value of Pi (π) to two decimal places?",
        answers: [
            { text: "3.10", correct: false },
            { text: "3.14", correct: true },
            { text: "3.16", correct: false },
            { text: "3.20", correct: false }
        ]
    },
    {
        question: "What type of animal is a kangaroo?",
        answers: [
            { text: "Reptile", correct: false },
            { text: "Marsupial", correct: true },
            { text: "Amphibian", correct: false },
            { text: "Bird", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for potassium?",
        answers: [
            { text: "Po", correct: false },
            { text: "K", correct: true },
            { text: "Pt", correct: false },
            { text: "P", correct: false }
        ]
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Stephen Hawking", correct: false },
            { text: "Marie Curie", correct: false }
        ]
    },
    {
        question: "What is the largest continent by land area?",
        answers: [
            { text: "Africa", correct: false },
            { text: "Europe", correct: false },
            { text: "Asia", correct: true },
            { text: "North America", correct: false }
        ]
    },
    {
        question: "What is the name of the Earth's natural satellite?",
        answers: [
            { text: "Titan", correct: false },
            { text: "Europa", correct: false },
            { text: "The Moon", correct: true },
            { text: "Ganymede", correct: false }
        ]
    },
    {
        question: "Who wrote the novel 'Pride and Prejudice'?",
        answers: [
            { text: "Charlotte Brontë", correct: false },
            { text: "Jane Austen", correct: true },
            { text: "Emily Brontë", correct: false },
            { text: "George Eliot", correct: false }
        ]
    },
    {
        question: "What is the capital city of Canada?",
        answers: [
            { text: "Toronto", correct: false },
            { text: "Montreal", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Vancouver", correct: false }
        ]
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for iron?",
        answers: [
            { text: "Ir", correct: false },
            { text: "In", correct: false },
            { text: "Fe", correct: true },
            { text: "Hg", correct: false }
        ]
    },
    {
        question: "In what year did the first human land on the moon?",
        answers: [
            { text: "1965", correct: false },
            { text: "1969", correct: true },
            { text: "1972", correct: false },
            { text: "1959", correct: false }
        ]
    },
    {
        question: "What is the smallest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Mercury", correct: true },
            { text: "Venus", correct: false },
            { text: "Uranus", correct: false }
        ]
    },
    {
        question: "Who painted the 'Starry Night'?",
        answers: [
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false },
            { text: "Vincent van Gogh", correct: true },
            { text: "Salvador Dalí", correct: false }
        ]
    },
    {
        question: "What is the currency of Switzerland?",
        answers: [
            { text: "Euro", correct: false },
            { text: "Pound Sterling", correct: false },
            { text: "Swiss Franc", correct: true },
            { text: "Deutsche Mark", correct: false }
        ]
    },
    {
        question: "What is the main component of natural gas?",
        answers: [
            { text: "Propane", correct: false },
            { text: "Butane", correct: false },
            { text: "Methane", correct: true },
            { text: "Ethane", correct: false }
        ]
    },
    {
        question: "Which of these is a primary color?",
        answers: [
            { text: "Green", correct: false },
            { text: "Orange", correct: false },
            { text: "Blue", correct: true },
            { text: "Purple", correct: false }
        ]
    },
    {
        question: "What is the largest animal on Earth?",
        answers: [
            { text: "African Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Polar Bear", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "Oscar Wilde", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Bernard Shaw", correct: false },
            { text: "Samuel Beckett", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for silver?",
        answers: [
            { text: "Si", correct: false },
            { text: "Sl", correct: false },
            { text: "Ag", correct: true },
            { text: "Au", correct: false }
        ]
    },
    {
        question: "What is the freezing point of water in Fahrenheit?",
        answers: [
            { text: "0", correct: false },
            { text: "100", correct: false },
            { text: "32", correct: true },
            { text: "-18", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: true },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the smallest ocean on Earth?",
        answers: [
            { text: "Indian Ocean", correct: false },
            { text: "Atlantic Ocean", correct: false },
            { text: "Arctic Ocean", correct: true },
            { text: "Southern Ocean", correct: false }
        ]
    },
    {
        question: "Who invented the World Wide Web?",
        answers: [
            { text: "Bill Gates", correct: false },
            { text: "Steve Jobs", correct: false },
            { text: "Tim Berners-Lee", correct: true },
            { text: "Mark Zuckerberg", correct: false }
        ]
    },
    {
        question: "What is the capital of Italy?",
        answers: [
            { text: "Madrid", correct: false },
            { text: "Berlin", correct: false },
            { text: "Rome", correct: true },
            { text: "Paris", correct: false }
        ]
    },
    {
        question: "What is the value of Euler's number (e) to two decimal places?",
        answers: [
            { text: "2.17", correct: false },
            { text: "2.72", correct: true },
            { text: "3.14", correct: false },
            { text: "1.62", correct: false }
        ]
    },
    {
        question: "What type of animal is a dolphin?",
        answers: [
            { text: "Fish", correct: false },
            { text: "Reptile", correct: false },
            { text: "Mammal", correct: true },
            { text: "Amphibian", correct: false }
        ]
    },
    {
        question: "What is the chemical formula for table salt?",
        answers: [
            { text: "H2O", correct: false },
            { text: "CO2", correct: false },
            { text: "NaCl", correct: true },
            { text: "O2", correct: false }
        ]
    },
    {
        question: "Who was the first President of the United States?",
        answers: [
            { text: "Thomas Jefferson", correct: false },
            { text: "Abraham Lincoln", correct: false },
            { text: "George Washington", correct: true },
            { text: "John Adams", correct: false }
        ]
    },
    {
        question: "What is the highest mountain range in the world?",
        answers: [
            { text: "Andes", correct: false },
            { text: "Rocky Mountains", correct: false },
            { text: "Himalayas", correct: true },
            { text: "Alps", correct: false }
        ]
    },
    {
        question: "What is the speed of sound in dry air at 20°C?",
        answers: [
            { text: "300 m/s", correct: false },
            { text: "343 m/s", correct: true },
            { text: "400 m/s", correct: false },
            { text: "250 m/s", correct: false }
        ]
    },
    {
        question: "Which planet in our solar system has the most moons?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: true },
            { text: "Uranus", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "Who wrote the 'Iliad' and the 'Odyssey'?",
        answers: [
            { text: "Plato", correct: false },
            { text: "Aristotle", correct: false },
            { text: "Homer", correct: true },
            { text: "Socrates", correct: false }
        ]
    },
    {
        question: "What is the capital of Brazil?",
        answers: [
            { text: "Rio de Janeiro", correct: false },
            { text: "São Paulo", correct: false },
            { text: "Brasília", correct: true },
            { text: "Buenos Aires", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for copper?",
        answers: [
            { text: "Co", correct: false },
            { text: "Cr", correct: false },
            { text: "Cu", correct: true },
            { text: "Ca", correct: false }
        ]
    },
    {
        question: "What year did the Titanic sink?",
        answers: [
            { text: "1905", correct: false },
            { text: "1912", correct: true },
            { text: "1923", correct: false },
            { text: "1898", correct: false }
        ]
    },
    {
        question: "What is the largest moon of Saturn?",
        answers: [
            { text: "Europa", correct: false },
            { text: "Titan", correct: true },
            { text: "Ganymede", correct: false },
            { text: "Callisto", correct: false }
        ]
    },
    {
        question: "Who developed the polio vaccine?",
        answers: [
            { text: "Alexander Fleming", correct: false },
            { text: "Jonas Salk", correct: true },
            { text: "Louis Pasteur", correct: false },
            { text: "Robert Koch", correct: false }
        ]
    },
    {
        question: "What is the currency of China?",
        answers: [
            { text: "Yen", correct: false },
            { text: "Won", correct: false },
            { text: "Renminbi (Yuan)", correct: true },
            { text: "Ringgit", correct: false }
        ]
    },
    {
        question: "What is the process by which plants convert light energy into chemical energy?",
        answers: [
            { text: "Respiration", correct: false },
            { text: "Fermentation", correct: false },
            { text: "Photosynthesis", correct: true },
            { text: "Transpiration", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for lead?",
        answers: [
            { text: "Le", correct: false },
            { text: "Li", correct: false },
            { text: "Pb", correct: true },
            { text: "La", correct: false }
        ]
    },
    {
        question: "What is the boiling point of nitrogen at atmospheric pressure?",
        answers: [
            { text: "0 °C", correct: false },
            { text: "-78 °C", correct: false },
            { text: "-196 °C", correct: true },
            { text: "100 °C", correct: false }
        ]
    },
    {
        question: "Which galaxy is our solar system part of?",
        answers: [
            { text: "Andromeda", correct: false },
            { text: "Triangulum", correct: false },
            { text: "Milky Way", correct: true },
            { text: "Whirlpool", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Father of Computer Science'?",
        answers: [
            { text: "Bill Gates", correct: false },
            { text: "Alan Turing", correct: true },
            { text: "Charles Babbage", correct: false },
            { text: "Ada Lovelace", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Seoul", correct: false },
            { text: "Beijing", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "What is the chemical formula for carbon dioxide?",
        answers: [
            { text: "H2O", correct: false },
            { text: "O2", correct: false },
            { text: "CO2", correct: true },
            { text: "CH4", correct: false }
        ]
    },
    {
        question: "In what year did World War I begin?",
        answers: [
            { text: "1918", correct: false },
            { text: "1939", correct: false },
            { text: "1914", correct: true },
            { text: "1905", correct: false }
        ]
    },
    {
        question: "What is the largest volcano in our solar system (located on Mars)?",
        answers: [
            { text: "Mount Everest", correct: false },
            { text: "Mauna Loa", correct: false },
            { text: "Olympus Mons", correct: true },
            { text: "Mount Fuji", correct: false }
        ]
    },
    {
        question: "Who wrote the novel 'To Kill a Mockingbird'?",
        answers: [
            { text: "Ernest Hemingway", correct: false },
            { text: "F. Scott Fitzgerald", correct: false },
            { text: "Harper Lee", correct: true },
            { text: "John Steinbeck", correct: false }
        ]
    },
    {
        question: "What is the currency of India?",
        answers: [
            { text: "Rupiah", correct: false },
            { text: "Rupee", correct: true },
            { text: "Ringgit", correct: false },
            { text: "Baht", correct: false }
        ]
    },
    {
        question: "What is the name of the force that opposes motion between surfaces in contact?",
        answers: [
            { text: "Gravity", correct: false },
            { text: "Magnetism", correct: false },
            { text: "Friction", correct: true },
            { text: "Tension", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for zinc?",
        answers: [
            { text: "Ze", correct: false },
            { text: "Zr", correct: false },
            { text: "Zn", correct: true },
            { text: "Xe", correct: false }
        ]
    },
    {
        question: "What is the absolute zero temperature in Celsius?",
        answers: [
            { text: "0 °C", correct: false },
            { text: "-100 °C", correct: false },
            { text: "-273.15 °C", correct: true },
            { text: "-180 °C", correct: false }
        ]
    },
    {
        question: "What is the largest desert in the world by area?",
        answers: [
            { text: "Sahara Desert", correct: false },
            { text: "Arabian Desert", correct: false },
            { text: "Antarctic Polar Desert", correct: true },
            { text: "Gobi Desert", correct: false }
        ]
    },
    {
        question: "Who is credited with inventing the telephone?",
        answers: [
            { text: "Thomas Edison", correct: false },
            { text: "Nikola Tesla", correct: false },
            { text: "Alexander Graham Bell", correct: true },
            { text: "Benjamin Franklin", correct: false }
        ]
    },
    {
        question: "What is the capital of South Africa?",
        answers: [
            { text: "Johannesburg", correct: false },
            { text: "Cape Town", correct: false },
            { text: "Pretoria (administrative)", correct: true },
            { text: "Durban", correct: false }
        ]
    },
    {
        question: "What is the chemical formula for ozone?",
        answers: [
            { text: "O2", correct: false },
            { text: "CO", correct: false },
            { text: "O3", correct: true },
            { text: "N2", correct: false }
        ]
    },
    {
        question: "What year did the Cold War officially end?",
        answers: [
            { text: "1985", correct: false },
            { text: "1991", correct: true },
            { text: "2001", correct: false },
            { text: "1979", correct: false }
        ]
    },
    {
        question: "What is the name of our galaxy's central supermassive black hole?",
        answers: [
            { text: "Messier 87*", correct: false },
            { text: "Sagittarius A*", correct: true },
            { text: "Cygnus X-1", correct: false },
            { text: "Taurus A", correct: false }
        ]
    },
    {
        question: "Who wrote the 'Divine Comedy'?",
        answers: [
            { text: "Geoffrey Chaucer", correct: false },
            { text: "William Shakespeare", correct: false },
            { text: "Dante Alighieri", correct: true },
            { text: "John Milton", correct: false }
        ]
    },
    {
        question: "What is the currency of Australia?",
        answers: [
            { text: "New Zealand Dollar", correct: false },
            { text: "Pound Sterling", correct: false },
            { text: "Australian Dollar", correct: true },
            { text: "Canadian Dollar", correct: false }
        ]
    },
    {
        question: "What is the primary function of red blood cells?",
        answers: [
            { text: "Fighting infection", correct: false },
            { text: "Clotting blood", correct: false },
            { text: "Carrying oxygen", correct: true },
            { text: "Producing hormones", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for manganese?",
        answers: [
            { text: "Mg", correct: false },
            { text: "Mn", correct: true },
            { text: "Ma", correct: false },
            { text: "Mo", correct: false }
        ]
    },
    {
        question: "What is the unit of electrical resistance?",
        answers: [
            { text: "Ampere", correct: false },
            { text: "Volt", correct: false },
            { text: "Ohm", correct: true },
            { text: "Watt", correct: false }
        ]
    },
    {
        question: "What is the largest moon of Uranus?",
        answers: [
            { text: "Triton", correct: false },
            { text: "Europa", correct: false },
            { text: "Titania", correct: true },
            { text: "Oberon", correct: false }
        ]
    },
    {
        question: "Who is known for the theory of evolution by natural selection?",
        answers: [
            { text: "Gregor Mendel", correct: false },
            { text: "Carl Linnaeus", correct: false },
            { text: "Charles Darwin", correct: true },
            { text: "Jean-Baptiste Lamarck", correct: false }
        ]
    },
    {
        question: "What is the capital of Argentina?",
        answers: [
            { text: "Rio de Janeiro", correct: false },
            { text: "Santiago", correct: false },
            { text: "Buenos Aires", correct: true },
            { text: "Montevideo", correct: false }
        ]
    },
    {
        question: "What is the chemical formula for glucose?",
        answers: [
            { text: "H2O", correct: false },
            { text: "CO2", correct: false },
            { text: "C6H12O6", correct: true },
            { text: "NH3", correct: false }
        ]
    },
    {
        question: "In what year did the Wright brothers make their first successful flight?",
        answers: [
            { text: "1901", correct: false },
            { text: "1910", correct: false },
            { text: "1903", correct: true },
            { text: "1920", correct: false }
        ]
    },
    {
        question: "What is the name of the largest asteroid in the asteroid belt?",
        answers: [
            { text: "Vesta", correct: false },
            { text: "Pallas", correct: false },
            { text: "Ceres", correct: true },
            { text: "Juno", correct: false }
        ]
    },
    {
        question: "Who wrote the 'Harry Potter' book series?",
        answers: [
            { text: "J.R.R. Tolkien", correct: false },
            { text: "C.S. Lewis", correct: false },
            { text: "J.K. Rowling", correct: true },
            { text: "George Orwell", correct: false }
        ]
    },
    {
        question: "What is the currency of Russia?",
        answers: [
            { text: "Yuan", correct: false },
            { text: "Euro", correct: false },
            { text: "Ruble", correct: true },
            { text: "Lira", correct: false }
        ]
    },
    {
        question: "What is the function of the cerebellum in the brain?",
        answers: [
            { text: "Memory storage", correct: false },
            { text: "Language processing", correct: false },
            { text: "Coordination and balance", correct: true },
            { text: "Decision making", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for mercury?",
        answers: [
            { text: "Mg", correct: false },
            { text: "Me", correct: false },
            { text: "Hg", correct: true },
            { text: "Mr", correct: false }
        ]
    },
    {
        question: "What is the unit of force in the International System of Units (SI)?",
        answers: [
            { text: "Watt", correct: false },
            { text: "Joule", correct: false },
            { text: "Newton", correct: true },
            { text: "Pascal", correct: false }
        ]
    },
    {
        question: "What is the second largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Uranus", correct: false },
            { text: "Saturn", correct: true },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "Who formulated the laws of motion and universal gravitation?",
        answers: [
            { text: "Albert Einstein", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Isaac Newton", correct: true },
            { text: "Johannes Kepler", correct: false }
        ]
    },
    {
        question: "What is the capital of Egypt?",
        answers: [
            { text: "Cairo", correct: true },
            { text: "Alexandria", correct: false },
            { text: "Luxor", correct: false },
            { text: "Giza", correct: false }
        ]
    },
    {
        question: "What is the chemical formula for ammonia?",
        answers: [
            { text: "CO2", correct: false },
            { text: "H2O", correct: false },
            { text: "NH3", correct: true },
            { text: "CH4", correct: false }
        ]
    },
    {
        question: "In what year did the Chernobyl disaster occur?",
        answers: [
            { text: "1979", correct: false },
            { text: "1986", correct: true },
            { text: "1995", correct: false },
            { text: "1999", correct: false }
        ]
    },
    {
        question: "What is the name of the closest star to our solar system (other than the Sun)?",
        answers: [
            { text: "Sirius", correct: false },
            { text: "Alpha Centauri", correct: true },
            { text: "Vega", correct: false },
            { text: "Procyon", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Macbeth'?",
        answers: [
            { text: "Christopher Marlowe", correct: false },
            { text: "Ben Jonson", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "John Milton", correct: false }
        ]
    },
    {
        question: "What is the currency of Mexico?",
        answers: [
            { text: "Peso", correct: true },
            { text: "Dollar", correct: false },
            { text: "Euro", correct: false },
            { text: "Real", correct: false }
        ]
    },
    {
        question: "What is the function of the pancreas in the human body?",
        answers: [
            { text: "Filtering blood", correct: false },
            { text: "Producing bile", correct: false },
            { text: "Producing insulin and digestive enzymes", correct: true },
            { text: "Storing energy", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for tin?",
        answers: [
            { text: "Ti", correct: false },
            { text: "Tn", correct: false },
            { text: "Sn", correct: true },
            { text: "Tm", correct: false }
        ]
    },
    {
        question: "What is the unit of power in the International System of Units (SI)?",
        answers: [
            { text: "Newton", correct: false },
            { text: "Joule", correct: false },
            { text: "Watt", correct: true },
            { text: "Pascal", correct: false }
        ]
    },
    {
        question: "What is the third planet from the Sun in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Venus", correct: false },
            { text: "Earth", correct: true },
            { text: "Mercury", correct: false }
        ]
    },
    {
        question: "Who developed the theory of quantum mechanics?",
        answers: [
            { text: "Niels Bohr", correct: false },
            { text: "Max Planck", correct: true },
            { text: "Werner Heisenberg", correct: false },
            { text: "Erwin Schrödinger", correct: false }
        ]
    },
    {
        question: "What is the capital of Nigeria?",
        answers: [
            { text: "Lagos", correct: false },
            { text: "Kano", correct: false },
            { text: "Abuja", correct: true },
            { text: "Ibadan", correct: false }
        ]
    },
    {
        question: "What is the chemical formula for methane?",
        answers: [
            { text: "CO2", correct: false },
            { text: "H2O", correct: false },
            { text: "CH4", correct: true },
            { text: "O2", correct: false }
        ]
    },
    {
        question: "In what year did the Berlin Wall fall?",
        answers: [
            { text: "1985", correct: false },
            { text: "1991", correct: false },
            { text: "1989", correct: true },
            { text: "1975", correct: false }
        ]
    },
    {
        question: "What is the name of the largest known star in the universe?",
        answers: [
            { text: "Sirius A", correct: false },
            { text: "Betelgeuse", correct: false },
            { text: "UY Scuti", correct: true },
            { text: "Rigel", correct: false }
        ]
    },
    {
        question: "Who wrote the novel '1984'?",
        answers: [
            { text: "Aldous Huxley", correct: false },
            { text: "George Orwell", correct: true },
            { text: "Ray Bradbury", correct: false },
            { text: "H.G. Wells", correct: false }
        ]
    },
    {
        question: "What is the currency of South Korea?",
        answers: [
            { text: "Yen", correct: false },
            { text: "Won", correct: true },
            { text: "Ringgit", correct: false },
            { text: "Baht", correct: false }
        ]
    },
    {
        question: "What is the main function of the kidneys in the human body?",
        answers: [
            { text: "Pumping blood", correct: false },
            { text: "Digesting food", correct: false },
            { text: "Filtering waste from blood", correct: true },
            { text: "Producing hormones", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Gl", correct: false },
            { text: "Gd", correct: false },
            { text: "Au", correct: true },
            { text: "Go", correct: false }
        ]
    },
    {
        question: "What is the unit of energy in the International System of Units (SI)?",
        answers: [
            { text: "Watt", correct: false },
            { text: "Newton", correct: false },
            { text: "Joule", correct: true },
            { text: "Pascal", correct: false }
        ]
    },
    {
        question: "What is the fourth planet from the Sun in our solar system?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Who is known for his work on the laws of thermodynamics?",
        answers: [
            { text: "Michael Faraday", correct: false },
            { text: "James Clerk Maxwell", correct: false },
            { text: "Sadi Carnot", correct: true },
            { text: "André-Marie Ampère", correct: false }
        ]
    },
    {
        question: "What is the capital of Saudi Arabia?",
        answers: [
            { text: "Dubai", correct: false },
            { text: "Riyadh", correct: true },
            { text: "Mecca", correct: false },
            { text: "Doha", correct: false }
        ]
    },
    {
        question: "What is the chemical formula for water?",
        answers: [
            { text: "CO2", correct: false },
            { text: "O2", correct: false },
            { text: "H2O", correct: true },
            { text: "CH4", correct: false }
        ]
    },
    {
        question: "In which state is Chicago city located?",
        answers: [
            { text: "Nevada", correct: false },
            { text: "Illinois", correct: true },
            { text: "Texas", correct: false },
            { text: "Alabama", correct: false }
        ]
    }
       
];
