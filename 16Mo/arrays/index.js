document.addEventListener('DOMContentLoaded', () => {
  
  // const hours = [10, 20, 25, 16, 8, 0, 0];
  // console.log('On Sunday I worked ' + hours[6] + ' hours.');

  // const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  // days.push('Saturday');
  // days.push('Sunday');
  // console.log(days[0]);
  // console.log(days.length);

  let numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];

  // console.log(numbers.length);
  // console.log(numbers[13]);
  // console.log(numbers[Math.floor(numbers.length/2)]);

  // for (const x of numbers) {
  //   console.log(x);
  // }

  // for (const x of numbers) {
  //   console.log(x*x);
  // }

  // for (const x of numbers) {
  //   if (x < 0) {
  //     console.log(x);
  //   }
  // }

  // for (const x of numbers) {
  //   if (x >= 0) {
  //     console.log(x);
  //   }
  //   else {
  //     console.log(-x);
  //   }
  // }

  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] === -10) {
  //     console.log(i);
  //   }
  // }

  // for (const x of numbers) {
  //   if (x % 3 === 0) {
  //     console.log(x);
  //   }
  // }

  // for (const x of numbers) {
  //   if (x % 2 === 0) {
  //     console.log(x);
  //   }
  // }

  // for (const x of numbers) {
  //   console.log(x - 5);
  // }

  // for (const x of numbers) {
  //   console.log((x - 5) ** 2);
  // }

  // for (let i = 1; i < numbers.length; i++) {
  //   if (numbers[i] > numbers[i-1]) {
  //     console.log(numbers[i]);
  //   }
  // }

  // for (let i = 1; i < numbers.length - 1; i++) {
  //   if (numbers[i] > numbers[i-1] && numbers[i] > numbers[i+1]) {
  //     console.log(numbers[i]);
  //   }
  // }

  // let count = 0;
  // for (const x of numbers) {
  //   count++;
  // }
  // console.log(count);

  // let count = 0;
  // for (const x of numbers) {
  //   if (x < 0) {
  //     count++;
  //   }
  // }
  // console.log(count);

  // let sum = 0;
  // for (const x of numbers) {
  //   sum += x;
  // }
  // console.log(sum);

  // let sum = 0;
  // let count = 0;
  // for (const x of numbers) {
  //   sum += x;
  //   count++;
  // }
  // console.log(sum/count);

  // let sum = 0;
  // for (const x of numbers) {
  //   if (x > 0) {
  //     sum += x;
  //   }
  // }
  // console.log(sum);

  // let sum = 0;
  // let count = 0;
  // for (const x of numbers) {
  //   sum += x;
  //   count++;
  // }
  // const average = sum/count;
  // let ret = 0;
  // for (const x of numbers) {
  //   ret += (x - average) ** 2;
  // }
  // console.log(ret);

  // let sum = 0;
  // let count = 0;
  // for (const x of numbers) {
  //   sum += x;
  //   count++;
  // }
  // const average = sum/count;
  // let ret = 0;
  // for (const x of numbers) {
  //   ret += (x - average) ** 2;
  // }
  // console.log(ret/count);

  // let maxSequenceLength = 0;
  // let sequenceLength = 0;
  // for (let i = 1; i < numbers.length; i++) {
  //   if (numbers[i] > numbers[i-1]) {
  //     sequenceLength++;
  //     if (sequenceLength > maxSequenceLength) {
  //       maxSequenceLength = sequenceLength;
  //     }
  //   } else {
  //     sequenceLength = 0;
  //   }
  // }
  // console.log(maxSequenceLength + 1);

  // let maxSequenceLength = 0;
  // let sequenceLength = 0;
  // for (let i = 1; i < numbers.length; i++) {
  //   if (numbers[i] > numbers[i-1]) {
  //     sequenceLength++;
  //     if (sequenceLength > maxSequenceLength) {
  //       maxSequenceLength = sequenceLength;
  //     }
  //   } else {
  //     sequenceLength = 0;
  //   }
  // }
  // sequenceLength = 0;
  // for (let i = 1; i < numbers.length; i++) {
  //   if (numbers[i] < numbers[i-1]) {
  //     sequenceLength++;
  //     if (sequenceLength > maxSequenceLength) {
  //       maxSequenceLength = sequenceLength;
  //     }
  //   } else {
  //     sequenceLength = 0;
  //   }
  // }
  // console.log(maxSequenceLength + 1);

  // let max = -Infinity;
  // for (const x of numbers) {
  //   if (x > max) {
  //     max = x;
  //   }
  // }
  // console.log(max);

  // let max = -Infinity;
  // let secMax = -Infinity;
  // for (const x of numbers) {
  //   if (x > max) {
  //     secMax = max;
  //     max = x;
  //   }
  // }
  // console.log(secMax);

  // let peaks = [];
  // for (let i = 1; i < numbers.length - 1; i++) {
  //   if (numbers[i] > numbers[i-1] && numbers[i] > numbers[i+1]) {
  //     peaks.push(numbers[i]);
  //   }
  // }
  // let min = Infinity;
  // for (const x of peaks) {
  //   if (x < min) {
  //     min = x;
  //   }
  // }
  // console.log(min);

  // let valleys = [];
  // for (let i = 1; i < numbers.length - 1; i++) {
  //   if (numbers[i] < numbers[i-1] && numbers[i] < numbers[i+1]) {
  //     valleys.push(numbers[i]);
  //   }
  // }
  // let max = -Infinity;
  // for (const x of valleys) {
  //   if (x > max) {
  //     max = x;
  //   }
  // }
  // console.log(max);

  // const reversed = [];
  // for (const x of numbers) {
  //   reversed.unshift(x);
  // }
  // console.log(reversed);

  // const random = [];
  // for (let i = 0; i < 19; i++) {
  //   const index = Math.floor(Math.random() * numbers.length);
  //   random[i] = numbers[index];
  //   for (let j = index; j < numbers.length - 1; j++) {
  //     numbers[j] = numbers[j+1];
  //   }
  //   numbers.pop(numbers.length - 1);
  // }
  // console.log(random);

  // const sorted = [];
  // for (let i = 0; i < 19; i++) {
  //   let minIndex = 0;
  //   for (let j = 1; j < numbers.length; j++) {
  //     if (numbers[j] < numbers[minIndex]) {
  //       minIndex = j;
  //     }
  //   }
  //   sorted[i] = numbers[minIndex];
  //   for (let j = minIndex; j < numbers.length - 1; j++) {
  //     numbers[j] = numbers[j+1];
  //   }
  //   numbers.pop();
  // }
  // console.log(sorted);

  // numbers = [1, 2, 3, 1];

  // const generateSubsequences = array => {
  //   if (array.length === 1) {
  //     return [[array[0]]];
  //   }
  //   const first = array.shift();
  //   const firstHalf = generateSubsequences(array);
  //   const secondHalf = [];
  //   for (const x of firstHalf) {
  //     const item = x.slice();
  //     item.unshift(first);
  //     secondHalf.push(item);
  //   }
  //   return firstHalf.concat(secondHalf);
  // }
  // const subsequences = generateSubsequences(numbers);
  // const ascendingSubsequences = [];
  // for (const sequence of subsequences) {
  //   let ascending = true;
  //   for (let i = 1; i < sequence.length; i++) {
  //     if (sequence[i] <= sequence[i-1]) {
  //       ascending = false;
  //       break;
  //     }
  //   }
  //   if (ascending) {
  //     ascendingSubsequences.push(sequence);
  //   }
  // }
  // let maxLength = -Infinity;
  // let maxSequence = [];
  // for (const sequence of ascendingSubsequences) {
  //   if (sequence.length > maxLength) {
  //     maxLength = sequence.length;
  //     maxSequence = sequence;
  //   }
  // }
  // console.log(maxLength);
  // console.log(maxSequence);

  // const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];
  // const timeFormat = time => {
  //   const hours = Math.floor(time / 60);
  //   let mins = time % 60;
  //   if (mins < 10) {
  //     mins = '0' + String(mins);
  //   }
  //   else {
  //     mins = String(mins);
  //   }
  //   return String(hours) + ':' + mins;
  // };
  // let timeTable = "";
  // for (const x of departures) {
  //   timeTable += `<tr><td>${timeFormat(x)}</td></tr>`;
  // }
  // let timeTableElement = document.querySelector('#timeTable');
  // timeTableElement.innerHTML = timeTable;

  // const compress = (array) => {
  //   const ret = [array[0]];
  //   for (let i = 1; i < array.length; i++) {
  //     if (array[i] !== ret[ret.length - 1]) {
  //       ret.push(array[i]);
  //     }
  //   }
  //   return ret;
  // };
  // console.log(compress([3, 3, 3, 2, 2, 5, 5, 5, 4, 1, 1, 1]));

    const pack = (array) => {
      const ret = [];
      let current = [array[0]];
      for (let i = 1; i < array.length; i++) {
        if (array[i] === current[current.length - 1]) {
          current.push(array[i]);
        }
        else {
          ret.push(current);
          current = [array[i]];
        }
      }
      ret.push(current);
      return ret;
    };
  //   console.log(pack([3, 3, 3, 2, 2, 5, 5, 5, 4, 1, 1, 1]));

    // const encode = (array) => {
    //   const packed = pack(array);
    //   ret = [];
    //   for (arr of packed) {
    //     ret.push([arr.length, arr[0]]);
    //   }
    //   return  ret;
    // };
    // console.log(encode([3, 3, 3, 2, 2, 5, 5, 5, 4, 1, 1, 1]));

    const encode = (array) => {
      const packed = pack(array);
      ret = [];
      for (arr of packed) {
        if (arr.length === 1) {
          ret.push(arr[0]);
        }
        else {
          ret.push([arr.length, arr[0]]);
        }
      }
      return  ret;
    };
    console.log(encode([3, 3, 3, 2, 2, 5, 5, 5, 4, 1, 1, 1]));



});

