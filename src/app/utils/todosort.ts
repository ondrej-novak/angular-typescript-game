import { TodoItem } from '../models/ToDoItem';

/*
Custom merge sort for ToDo List
Sort alphabeticaly by titles 
Completed todo's task will be displayed always first
*/
export class TodoSort {

    public mergeSort = function(list : TodoItem[]): TodoItem[] {

        if (!list || list.length < 2) 
        {
            return list
        }        

        const middle = Math.floor(list.length / 2) // get the middle item of the array rounded down
        const left = list.slice(0, middle) // items on the left side
        const right = list.slice(middle) // items on the right side

        return this.merge(
            this.mergeSort(left),
            this.mergeSort(right)
        )        
    };
     
    private merge = function (a:TodoItem[],b:TodoItem[]): TodoItem[] {

        let result = [];        
        let indexLeft = 0;
        let indexRight = 0;

        // Completed tasks have higher priority
        while (indexLeft < a.length && indexRight < b.length) 
        {                
            if (a[indexLeft].completed && !b[indexLeft].completed){
                result.push(a[indexLeft])
                indexLeft++
            }

            else if (!a[indexLeft].completed && b[indexLeft].completed){
                result.push(b[indexRight])
                indexRight++
            }

            // TODO: modify to work. Problem with sorting two completed task
            else if (a[indexLeft].completed && b[indexLeft].completed){
                if (a[indexLeft].title.toLowerCase() < b[indexRight].title.toLowerCase()) 
                {
                    result.push(a[indexLeft])                    
                    result.push(b[indexLeft])                    
                } else {
                    result.push(b[indexRight])         
                    result.push(a[indexLeft])            
                }
                indexLeft++
                indexRight++
            }

            else{
                if (a[indexLeft].title.toLowerCase() < b[indexRight].title.toLowerCase()) 
                {
                    result.push(a[indexLeft])
                    indexLeft++
                } else {
                    result.push(b[indexRight])
                    indexRight++
                }
            }            
        }

        return result.concat(a.slice(indexLeft)).concat(b.slice(indexRight))
    }
}
