// Lesson-24 //

// Calculator //

// describe("Calculator", function() {
//     beforeEach(function() {
//       firstNumber = 10;
//       secondNumber = 5;
//     });
  
//     it("should add", function() {
//       expect(adding(firstNumber, secondNumber)).toEqual("Adding = 15");
//     });
  
//     it("should subtract", function() {
//       expect(subtracting(firstNumber, secondNumber)).toEqual("Subtracting = 5");
//     });
  
//     it("should multiply", function() {
//       expect(multiplying(firstNumber, secondNumber)).toEqual("Multiplying = 50");
//     });
  
//     it("should divide", function() {
//       expect(dividing(firstNumber, secondNumber)).toEqual("Dividing = 2");
//     });
  
//     it("should throw an error if one of the numbers is not entered", function() {
//       expect(function() {error('', 5)}).toThrow("Error: Please enter a number");
//     });
  
//     it("should throw an error if one of the numbers is not a number", function() {
//       expect(adding(10, 'hello')).toEqual("Error: Not a number");
//     });
//   });
    
    

// min/max nambers //    

// describe("findMinMax", () => {
//     it("should return the minimum and maximum numbers from an array of mixed values", () => {
//       const numbers = [
//         27049,
//         true,
//         46066,
//         22591,
//         false,
//         20232, 
//         15372,  
//         null, 
//         66230,
//         24795, 
//         'test',
//         14433,
//         undefined,
//         45986,
//         15355
//       ];
//       const [min, max] = findMinMax(numbers);
//       expect(min).toEqual(14433);
//       expect(max).toEqual(66230);
//     });
//   });    
    
    













// Lesson-26 //

//   //Accumulator//
//  describe("Accumulator", function() {
//     let accumulator;
  
//     beforeEach(function() {
//       accumulator = new Accumulator(5);
//     });
  
//     it("should initialize value correctly", function() {
//       expect(accumulator.value).toEqual(5);
//     });
  
//     it("should increment value correctly", function() {
//       accumulator.increment();
//       expect(accumulator.value).toEqual(6);
//     });
  
//     it("should decrement value correctly", function() {
//       accumulator.decrement();
//       expect(accumulator.value).toEqual(4);
//     });
//   });


//   // CancelableAccumulator //
//   describe("CancelableAccumulator", function() {
//     let cancelableAccumulator;
  
//     beforeEach(function() {
//       cancelableAccumulator = new CancelableAccumulator(10);
//     });
  
//     it("should initialize value correctly", function() {
//       expect(cancelableAccumulator.value).toEqual(10);
//     });
  
//     it("should increment value correctly", function() {
//       cancelableAccumulator.increment();
//       expect(cancelableAccumulator.value).toEqual(11);
//     });
  
//     it("should decrement value correctly", function() {
//       cancelableAccumulator.decrement();
//       expect(cancelableAccumulator.value).toEqual(9);
//     });
  
//     it("should clear value correctly", function() {
//       cancelableAccumulator.clear();
//       expect(cancelableAccumulator.value).toEqual(10);
//     });
//   });













// // Lesson-28 //


// // Zoom in and out of the photo with a click //

// describe("Zoom in and out of the photo", () => {
//     let photo;
  
//     beforeEach(() => {
//       photo = document.createElement('div');
//       photo.classList.add('photo');
//       document.body.appendChild(photo);
//     });
  
//     afterEach(() => {
//       photo.remove();
//     });
  
//     it("Photo click", () => {
//       photo.click();
//       expect(photo.classList.contains('active')).toBe(true);
//       photo.click();
//       expect(photo.classList.contains('active')).toBe(false);
//     });
//   });







// // Navigation by letters //
//   describe("Navigation by letters", () => {
//     let navLetters, sections;
  
//     beforeEach(() => {
//       navLetters = document.createElement('div');
//       navLetters.innerHTML = `
//         <div class="nav-letter" data-nav="C"></div>
//         <div class="nav-letter" data-nav="L"></div>
//         <div class="nav-letter" data-nav="S"></div>
//         <div class="nav-letter" data-nav="H"></div>
//         <div class="nav-letter" data-nav="W"></div>
//         <div class="nav-letter" data-nav="E"></div>
//       `;
//       document.body.appendChild(navLetters);
  
//       sections = document.createElement('div');
//       sections.innerHTML = `
//         <div class="section"><h2>C Section</h2></div>
//         <div class="section"><h2>L Section</h2></div>
//         <div class="section"><h2>S Section</h2></div>
//         <div class="section"><h2>H Section</h2></div>
//         <div class="section"><h2>W Section</h2></div>
//         <div class="section"><h2>E Section</h2></div>
//       `;
//       document.body.appendChild(sections);
//     });
  
//     afterEach(() => {
//       navLetters.remove();
//       sections.remove();
//     });
  
//     it("navigates to the correct section on keydown", () => {
//       const eventC = new KeyboardEvent('keydown', {key: 'C'});
//       document.dispatchEvent(eventC);
//       expect(sections.querySelector('.section:first').scrollIntoView).toHaveBeenCalled();
  
//       const eventL = new KeyboardEvent('keydown', {key: 'L'});
//       document.dispatchEvent(eventL);
//       expect(sections.querySelector('.section:second').scrollIntoView).toHaveBeenCalled();
  
//       const eventS = new KeyboardEvent('keydown', {key: 'S'});
//       document.dispatchEvent(eventS);
//       expect(sections.querySelector('.section:third').scrollIntoView).toHaveBeenCalled();
  
//       const eventH = new KeyboardEvent('keydown', {key: 'H'});
//       document.dispatchEvent(eventH);
//       expect(sections.querySelector('.section:fourth').scrollIntoView).toHaveBeenCalled();

//       const eventW = new KeyboardEvent('keydown', {key: 'W'});
//       document.dispatchEvent(eventW);
//       expect(sections.querySelector('.section:fifth').scrollIntoView).toHaveBeenCalled();

//       const eventE = new KeyboardEvent('keydown', {key: 'E'});
//       document.dispatchEvent(eventE);
//       expect(sections.querySelector('.section:sixth').scrollIntoView).toHaveBeenCalled();

//       const eventD = new KeyboardEvent('keydown', {key: 'D'});
//       document.dispatchEvent(eventD);
//       expect(sections.querySelector('.section:wichNotCalled')).not.toHaveBeenCalled();
//     });
//   }); 