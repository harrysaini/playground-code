namespace MyMath  {
    const PI = 3.14;
    export function getCircumferenceOfCircle(diameter: number): number{
        return diameter * PI
    }
    export function getCircumferenceOfRectangle(length:number, breadth:number){
        return 2*(length + breadth);
    }
    
}

console.log(MyMath.getCircumferenceOfRectangle(3,4));