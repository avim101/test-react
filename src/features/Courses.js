import React from "react";
import { getCourses } from "../api/courseApi";
getCourses().then(c => console.log(c));
const CoursesPage = () => {
    return (
        <>
            <h2>Courses</h2>
            <p>this courses page</p>
        </>
    );
};

export default CoursesPage;
