// Ch 2: Looping a Trinagle
var myString = "";
for (i = 0; i < 7; i++) {
  myString += "#";
  console.log(myString);
}

/* Console output: 
#
##
###
####
#####
######
#######
*/


// Ch 2: FizzBuzz.
for (i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz");
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
  }
  else if (i % 3 == 0) {
    console.log("Fizz");
  }
  else {
    console.log(i);
  }
}

/* Output: 
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz
*/


// Ch 2: Chessboard.
var size = 8;
var myString = "";
var myNum = 0;

for (i = 0; i < size; i++) { //lines
  for (j = 0; j < size; j++) {//characters on a line
    if (myNum % 2 == 0) {
      myString += " ";
      myNum +=1;
    } else {
      myString += "#";
      myNum +=1;
    }
  }
  myNum +=1;
  myString += "\n";
}
console.log(myString);


/*Output:
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/