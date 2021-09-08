## Types of Common Problems:

### <u> DOM-related Errors – Keep in Mind the Order of Execution </u>

> SyntaxError

- কোডে কিছু মিসিং বা ভুল আছে, যেমনঃ ব্রাকেট, সেমিকোলন, কোলন, কমা।
- Solution: কমেন্ট করে প্রবলেম এরিয়া ছোট করার ট্রাই করবো।

> ReferenceError

- এমন কোনো লিখছেন, যা এখনো ডিফাইন করা হয় নাই।
- Common issue: Spelling Mistake

- variableName is not defined
- functionName is not defined

- Solution: বানান ঠিক আছে কিনা চেক করা।

> TypeError

- আমরা যেই মেথড/প্রোপার্টি ব্যবহার করার ট্রাই করতেছি, সেটা বর্তমান টাইপ এর অব্জেক্ট এর উপর ব্যবহার করা যায় না।

HTMLelement = <h1 id="kuddus">Kuddus is a good boy</h1>

HTMLelement.innerText
HTMLelement.innerHTML
HTMLelement.textContent
Array/String.length
HTMLelement<Input>.value

arrayMethod
arr.forEach()
arr.map()
arr.filter()
arr.find()

যেগুলো ভ্যালু আকারে পাওয়া যায়, সেগুলো property;
যেগুলো ফাংশন আকারে থাকে, সেগুলো হচ্ছে method;

null, বা undefined এর ক্ষেত্রে কোনো প্রোপার্টি বা মেথড এক্সেস করা যায় না + index ও এক্সেস করা যায় না। তার মানে, set ,get করা যায় না।

- Uncaught TypeError: can't access property "innerHTML" of null
- Uncaught TypeError: Cannot read property
- Uncaught TypeError: Cannot set property
- TypeError: ‘undefined’ is not a function
  Explanation: This is an error that occurs in Chrome when you call an undefined function
- TypeError: Cannot read property ‘length’ of undefined

> Logical Error ( Harder to debug )

## Things we need to keep in mind while debugging

- Try to visualize the code execution
- console.log() variables, function calls that you think might have caused issues
-

Fetch এর জন্য

[{},{}]
{docs: [{}, {}]}

> HW
> এগুলো নিজে ক্রিয়েট করে প্র্যাক্টিস করবেন।
> ফেচ এর লিংক ভুল হলে এরর ডীটেক্ট করা
> TypeError গুলো
> ReferenceError
