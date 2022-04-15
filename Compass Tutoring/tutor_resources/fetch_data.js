const math_resources = [
    {
        "title": "Math Workbook Grade 1 Module",
        "link": "https://www.pdfdrive.com/math-workbook-grade-1-module-d26612078.html",
        "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "category": "Book",
        "grade": "1"
    },
    {
        "title": "Math Made Easy Grade 1: Math Workbook",
        "link": "https://www.pdfdrive.com/math-made-easy-grade-1-math-workbook-canadian-edition-e188419589.html",
        "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "category": "Book",
        "grade": "1"
    },
    {
        "title": "Grade 1 Mathematics Curriculum",
        "link": "https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics/grades/g1-math/strand-overviews",
        "dscr": "Here you will find the expectations and learning for the areas of study for Grade 1 Mathematics. ",
        "category": "Website",
        "grade": "1"
    },
    {
        "title": "Skill Sharpeners Math, Grade 1",
        "link": "https://www.pdfdrive.com/skill-sharpeners-math-grade-1-e186538941.html",
        "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "category": "Book",
        "grade": "1"
    },
    {
        "title": "Ontario Grade 1 Math Topics",
        "link": "https://ca.ixl.com/standards/ontario/math/grade-1",
        "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "category": "Website",
        "grade": "1"
    },
    {
        "title": "Math Practice Workbook, Grade 2",
        "link": "https://gifs.africa/wp-content/uploads/2020/04/Grade-2-Mathematics-Practice-Workbook.pdf",
        "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "category": "File",
        "grade": "2"
    },
    {
        "title": "Grade 2 Math Workbooks and Books",
        "link": "https://www.pdfprof.com/PDF_Image.php?idt=74175&t=27",
        "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "category": "Website",
        "grade": "2"
    },
    {
        "title": "Grade 2 Practice Workseets Resources",
        "link": "https://www.pdfprof.com/PDF_Image.php?idt=74175&t=27",
        "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "category": "Website",
        "grade": "2"
    },
    {
        "title": "Grade 2 Math Worksheets",
        "link": "https://www.quranmualim.com/all-2nd-grade-math-worksheets-pdf-free-printable-download/",
        "dscr": "This is a Best collection of free 2nd Grade Math Worksheets pdf, organized by topics such as addition, subtraction, division, mental math and more",
        "grade": "2",
        "category": "Website",
    }
];

var dataFetched = false;

async function fetch_data() {
    if (window.location.protocol == "file:") {

        console.log("Running from a file, won't attempt to get data from .json files");
        dataFetched = true;
        return;
    }
    math_info = await (await fetch("math/data/math_resources.json")).json();
}