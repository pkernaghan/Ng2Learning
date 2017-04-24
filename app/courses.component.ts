import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
import {FavouriteComponent} from './favourite.component'

@Component({
    selector: 'courses',
    template: `
                <h2>Courses</h2>
                {{ title }}
                <input type="text" autoGrow />
                <ul>
                    <div *ngFor="#course of courses">
                    <favourite></favourite>
                    {{course}}
                    </div>
                </ul>
                `,
    providers: [CourseService],
    directives: [AutoGrowDirective, FavouriteComponent]
})
export class CoursesComponent {
    title: string = "The title of courses page";
    courses;

    constructor(courseService: CourseService)
    {
        this.courses = courseService.getCourses();
    }

    // courses = ["Course1", "Course2", "Course3"]
}