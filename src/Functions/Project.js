import { format } from 'date-fns';

export let projectLibrary = [];

export class Project {
    constructor(title, ...tasks) {
        this.title = title;
        this.date = format(new Date(), "c.M.y 'at' kk.mm");
        this.tasks = tasks;
    }
};

export function addToLibrary(project) {
    projectLibrary.push(project);
}