function openCourse(course){
    const loading = document.getElementById("loading")
    const cube3x3 = document.getElementById("cube3x3")
    const cube2x2 = document.getElementById("cube2x2")

    loading.classList.add('invisible');

    switch(course){
        case 1:
            cube3x3.classList.remove('invisible');
            cube2x2.classList.add("invisible");
        break;
        case 2:
            cube3x3.classList.add('invisible');
            cube2x2.classList.remove("invisible");
        break;
    }
}