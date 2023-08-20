import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviewqst',
  templateUrl: './interviewqst.component.html',
  styleUrls: ['./interviewqst.component.scss']
})
export class InterviewqstComponent implements OnInit {
  oppsQst: Array<any> = [];
  angularQst: Array<any> = [];
  CurrentSection: string = "Angular";
  sideMenu: Array<any> = [{
    Icon:'fa fa-tachometer',
    Name: 'Angular',
    Link: 'Angular'
  }, {
    Icon:'fa fa-users',
    Name: 'C#',
    Link: 'C#'
  }, {
    Icon:'fa fa-desktop',
    Name: '.Net Core',
    Link: '.Net Core'
  }, {
    Icon:'fa fa-user',
    Name: 'LINQ',
    Link: 'LINQ'
  }, {
    Icon:'fa fa-user',
    Name: 'C# Notes',
    Link: 'C# Notes'
  }]

  constructor() { }

  ngOnInit(): void {
    this.angularQst = [{
      Question: "What is Angular?"
      },
      {
          Question: "What are Angular advantages?"
      },
      {
          Question: "Whats the use of Angular ?"
      },
      {
          Question: "What is the difference between AngularJS and Angular?"
      },
      {
          Question: "What is NPM ?"
      },
      {
          Question: "What is CLI tool ?"
      },
      {
          Question: "What is Typescript? What are the advantages of Typescript over JavaScript ?"
      },
      {
          Question: "Where to store static files in Angular project ?"
      },
      {
          Question: "What is the role of Angular.json file in Angular?"
      },
      {
          Question: "What is the difference between JIT and AOT in Angular ?"
      },
      {
          Question: "Explain architecture of Angular ?"
      },
      {
          Question: "What is SPA in Angular ?"
      },
      {
          Question: "How to implement SPA in Angular ?"
      },
      {
          Question: "How to implement routing in Angular ?"
      },
      {
          Question: "Explain Lazy Loading ?"
      },
      {
          Question: "How to implement Lazy Loading in Angular ?"
      },
      {
          Question: "What are Components in Angular?"
      },
      {
          Question: "What is a Selector and Template?"
      },
      {
          Question: "What is Module in Angular? What is app.module.ts file?"
      },
      {
          Question: "Angular App gets Loaded&Started?Define index.html,app-root,selector&main.ts?"
      },
      {
          Question: "What is a Bootstrapped Module & Bootstrapped Component?"
      },
      {
          Question: "What is Data Binding in Angular?"
      },
      {
          Question: "Explain the four types of Data bindings in Angular ?"
      },
      {
          Question: "What is String Interpolation in Angular?"
      },
      {
          Question: "What is Property Binding in Angular?"
      },
      {
          Question: "What is Event Binding in Angular?"
      },
      {
          Question: "What is Two way Binding in Angular?"
      },
      {
          Question: "What are Directives? What are the type of directives?"
      },
      {
          Question: "What is *ngIf Structural directive?"
      },
      {
          Question: "What is *ngFor Structural directive?"
      },
      {
          Question: "What is *ngSwitch Structural directive?"
      },
      {
          Question: "What is [ngStyle] Attribute directive?"
      },
      {
          Question: "What is [ngClass] Attribute directive?"
      },
      {
          Question: "Difference between Component, Attribute and Structural Directives?"
      },
      {
          Question: "What is Decorator?"
      },
      {
          Question: "What are the types of Decorator?"
      },
      {
          Question: "What are Pipes? What are the types of Pipes & Parameterized Pipes?"
      },
      {
          Question: "What is Chaining Pipes?"
      },
      {
          Question: "Explain Services with Example?"
      },
      {
          Question: "How to create Servicein Angular?"
      },
      {
          Question: "How to use Dependency Injector with Services in Angular?"
      },
      {
          Question: "What is Hierarchical Dependency Injection?"
      },
      {
          Question: "Whats the benefit of Depedency Injection ?"
      },
      {
          Question: "Differentiate between ng serve and ng build ?"
      },
      {
          Question: "Explain the --prod parameter in ng build ?"
      },
      {
          Question: "What is Provider in Angular?"
      },
      {
          Question: "What is the role of @Injectable Decorator in a Service?"
      },
      {
          Question: "What are Parent-Child Components?"
      },
      {
          Question: "Define@Input Decorator ?How to transfer data from Parent to Child component?"
      },
      {
          Question: "What is @Output Decorator and Event Emitter?"
      },
      {
          Question: "What are Lifecycle Hooks in Angular?"
      },
      {
          Question: "What is a Constructor in Angular?"
      },
      {
          Question: "What is ngOnChanges life cycle hook in Angular?"
      },
      {
          Question: "What is ngOnInit life cycle hook in Angular?"
      },
      {
          Question: "What is the difference between constructor and ngOnInit ?"
      },
      {
          Question: "What is Routing? How to setup Routing?"
      },
      {
          Question: "What is router outlet?"
      },
      {
          Question: "What are router links ?"
      },
      {
          Question: "What are Asynchronous operations?"
      },
      {
          Question: "What is the difference between Promise and Observable?"
      },
      {
          Question: "What is RxJS?"
      },
      {
          Question: "What is the purpose of RxJs?"
      },
      {
          Question: "What is Observable? How to implement Observable ?"
      },
      {
          Question: "What are observables and observers?"
      },
      {
          Question: "How to unsbscribe in RxJs?"
      },
      {
          Question: "Which operators have you used from RxJs?"
      },
      {
          Question: "What is the role of HttpClient in Angular?"
      },
      {
          Question: "What are the steps for fetching the data with HttpClient & Observable ?"
      },
      {
          Question: "How to do HTTP Error Handling in Angular ?"
      },
      {
          Question: "What is Typescript ? Difference between Typescript and Javascript ?"
      },
      {
          Question: "How to install Typescript and check version ?"
      },
      {
          Question: "What is the difference between let and var keyword ?"
      },
      {
          Question: "What is Type annotation ?"
      },
      {
          Question: "What are Built in/Primitive & UserDefined/Non-primitive types in Typescript?"
      },
      {
          Question: "What is ANY type in Typescript?"
      },
      {
          Question: "What is Enum type in Typescript ?"
      },
      {
          Question: "What is the difference between void and never types in Typescript ?"
      },
      {
          Question: "What is Type Assertion in Typescript ?"
      },
      {
          Question: "What are Arrow Functions in Typescript ?"
      },
      {
          Question: "What is Object Oriented Programming in Typescript ?"
      },
      {
          Question: "What are Classes and Objects in Typescript ?"
      },
      {
          Question: "What is Constructor ?"
      },
      {
          Question: "What are Access Modifiers in Typescript ?"
      },
      {
          Question: "What is Encapsulation in Typescript?"
      },
      {
          Question: "What is Inheritance in Typescript ?"
      },
      {
          Question: "What is Polymorphism in Typescript ?"
      },
      {
          Question: "What is Interface in Typescript ?"
      },
      {
          Question: "What's the difference between extends and implements in TypeScript?"
      },
      {
          Question: "Is Multiple Inheritance possible in Typescript ?"
      },
      {
          Question: "What are Angular Forms? What are the type of Angular Forms?"
      },
      {
          Question: "What is the difference between Template Driven Forms & Reactive Forms ?"
      },
      {
          Question: "How to setup Template Driven Forms ?"
      },
      {
          Question: "How to apply Required field validation in template driven forms?"
      },
      {
          Question: "What is Form Group and Form Control in Angular ?"
      },
      {
          Question: "How to setup Reactive Forms ?"
      },
      {
          Question: "How to do validations in reactive forms ?"
      },
      {
          Question: "What is Authentication & Authorization in Angular ?"
      },
      {
          Question: "What is JWT Token Authentication in Angular ?"
      },
      {
          Question: "How to Mock or Fake an API for JWT Authentication ?"
      },
      {
          Question: "How to implement the Authentication with JWT in Angular ?"
      },
      {
          Question: "What is Auth Guard ?"
      },
      {
          Question: "What is HTTP Interceptor ?"
      },
      {
          Question: "How to implement interceptors?"
      },
      {
          Question: "Give some use of Interceptors?"
      },
      {
          Question: "Can we provide multi-interceptors?"
      },
      {
          Question: "How to Retry automatically if there is an error response from API ?"
      },
      {
          Question: "What are the parts of JWT Token ?"
      },
      {
          Question: "What is Postman ?"
      },
      {
          Question: "Which part of the request has the token stored when sending to API ?"
      },
      {
          Question: "What are the various ways to communicate between the components ?"
      },
      {
          Question: "What is ContentProjection? What is <ng-content>?"
      },
      {
          Question: "What is Template Reference Variable in Angular ?"
      },
      {
          Question: "What is the role of ViewChild in Angular?"
      },
      {
          Question: "How to access the child component from parent component with ViewChild?"
      },
      {
          Question: "Difference between ViewChild and ViewChildren? What is QueryList ?"
      },
      {
          Question: "What is ContentChild ?"
      },
      {
          Question: "What is the difference between ContentChild & ContentChildren ?"
      },
      {
          Question: "Compare ng-Content,ViewChild, ViewChildren, ContentChild & ContentChildren?"
      },
      {
          Question: "How to make HTTP calls using Angular ?"
      },
      {
          Question: "What is the need of Subscribe function ?"
      },
      {
          Question: "How to pass data between components ?"
      },
      {
          Question: "Explain importance of input, output & event emitters ?"
      },
      {
          Question: "How to pass during routing ?"
      },
      {
          Question: "Is it a good practice to pass data using services ?"
      }
    ]
    this.oppsQst= [{
      Question: "What is a Constructor? Use of constructor?",
      Ans: "A special method of the class that is automatically invoked when an instance of the class is created is called a constructor. ",
      SubHeading: "Some of the key points regarding constructor are",
      Points: ["A class can have any number of constructors.",
              "A constructor doesn't have any return type, not even void.",
              "A static constructor can not be a parametrized constructor.",
              "Within a class, you can create one static constructor only."]
    },{
      Question: "Different type of constructor?",
      Ans: "In C#, constructors can be divided into 5 types",
      Points: ["Default Constructor",
              "Parameterized Constructor",
              "Copy Constructor",
              "Static Constructor",
              "Private Constructor"]
    }, {
      Question: "What is Default Constructor?",
      Ans: "A constructor without any parameters is called a default constructor; in other words, this type of constructor does not take parameters. The drawback of a default constructor is that every instance of the class will be initialized to the same values and it is not possible to initialize each instance of the class with different values.",
    }, {
      Question: "What is parameterized constructor?",
      Ans: "A constructor with at least one parameter is called a parameterized constructor.",
    }, {
      Question: "Use of parameterized constructor?",
      Ans: "The advantage of a parameterized constructor is that you can initialize each instance of the class with a different value.",
    }, {
      Question: "What is constructor overloading?",
      Ans: "Constructor with different parameter is called constructor overloading.",
    }, {
      Question: "If we have only parameterized constructor, can we create the object of class?",
      Ans: "Yes",
    }, {
      Question: "What is copy constructor?",
      Ans: "The constructor which creates an object by copying variables from another object is called a copy constructor. The purpose of a copy constructor is to initialize a new instance to the values of an existing instance.",
    }, {
      Question: "What is private constructor?",
      Ans: "When a constructor is created with a private specifier, it is not possible for other classes to derive from this class, neither is it possible to create an instance of this class. ",
      SubHeading: "Some key points of a private constructor are:",
      Points: ["One use of a private constructor is when we have only static members.",
              "It provides an implementation of a singleton class pattern",
              "Once we provide a constructor that is either private or public or any, the compiler will not add the parameter-less public constructor to the class."]
    }, {
      Question: "Use of private constructor?",
      Ans: "They are usually used in classes that contain static members only.",
    }, {
      Question: "Can we create the object of class if we have only private constructor in class?",
      Ans: "No",
    }, {
      Question: "Can we have default and private constructor both in class?",
      Ans: "No",
    }, {
      Question: "Can we inherit the class if we have only private constructor in class?",
      Ans: "No",
    }, {
      Question: "can we have parameters in private constructor?",
      Ans: "Yes",
    }, {
      Question: "What is statuc constructor?",
      Ans: "When a constructor is created using a static keyword, it will be invoked only once for all of the instances of the class and it is invoked during the creation of the first instance of the class or the first reference to a static member in the class. ",
      SubHeading: "Some key points of a static constructor are:",
      Points: ["A static constructor does not take access modifiers or have parameters.",
              "A static constructor is called automatically to initialize the class before the first instance is created or any static members are referenced.",
              "A static constructor cannot be called directly.",
              "The user has no control over when the static constructor is executed in the program.",
              "A typical use of static constructors is when the class is using a log file and the constructor is used to write entries to this file."]
    }, {
      Question: "Can we have access modifier in static constructor?",
      Ans: "No",
    }, {
      Question: "Can we pass parameters in static constructor?",
      Ans: "No",
    }, {
      Question: "How to call static constructor or when static constructor is called?",
      Ans: "By class name.",
    }, {
      Question: "How many times we can call static constructor?",
      Ans: "Only once",
    }, {
      Question: "When we create instance of class, which constructor is called first?",
      Ans: "first called default after that static constructor called.",
    }, {
      Question: "Use of statics constructor?",
      Ans: "A static constructor is used to initialize static fields of the class and to write the code that needs to be executed only once.",
    }, {
      Question: "Can we have static constructor only?",
      Ans: "Yes",
    }, {
      Question: "How can we call one constructor from another in the same class?",
      Ans: "If constructor are on same class then By using this keyword. Eg. inherit the constructor by thiQuestion: keyword and called one constructor to other.",
    }, {
      Question: "When we create instance of child class which constructor is first called, child or parent?",
      Ans: "First called parent then called child constructor.",
    }, {
      Question: "Can we call base class parametrized constructor from child class constructor?",
      Ans: "Yes",
    }, {
      Question: "Default access modifier/ specific for constructor?",
      Ans: "Private",
    }, {
      Question: "How to call explicitly base class constructor by child class?",
      Ans: "If constructor are on different class like parent, child then we call base class constructor by using base keyword. Eg. inherit the constructor by base keyword.",
    }, {
      Question: "If we have only parameterized constructor in base class, can we create object of child class",
      Ans: "No",
    }, {
      Question: "What is Destructor?",
      Ans:"The Destructor is also a special type of method present in a class, just like a constructor, having the same name as the class name but prefixed with ~ tilde. The Constructor in C# is Explicitly called when the object of the class is created. On the other hand, the Destructor in C# is Implicitly Called when the object of the class is destroyed.",
    }, {
      Question: "How many destructor we have in one class?",
      Ans: "In a class, we can only define one Destructor (or Finalizer).",
    }, {
      Question: "Do we always need to implement the destructor?",
      Ans: "No",
    }, {
      Question: "When we define destructor, which method of garbage collector is called?",
      Ans: "Finalize();",
    }, {
      Question: "What is polymorphism?",
      Ans: "Polymorphism is one of the fundamental OOPs concepts. Polymorphism is a concept by which we can perform a single task in different ways. That is, when a single entity behaves differently in different cases, it is called polymorphism in C#. The term polymorphism is an object-oriented programming term that means a function, or an operator behaves differently in different scenarios. Technically we can say that when a function shows different behaviors when we passed different types and numbers of input values, then it is called Polymorphism in C#. So, behave in different ways depending on the input received is known as polymorphism i.e. whenever the input changes, automatically the output or the behavior also changes. We can achieve flexibility in our code using polymorphism because we can perform various operations by using methods with the same names according to our business requirements. Let’s understand Polymorphism with some real-time examples. ",
      SubHeading: "Let us understand a few real-time examples to understand this Polymorphism concept.",
      Points: ["Suppose you are in a classroom, then at that time you will behave like a student. But when you are in the shopping mall, at that time you will behave like a customer. Again, when you are traveling on a bus, then you will behave like a passenger. And when you are at your home at that time you will behave like a son or daughter. Here you are one person, but performing different behaviors. This is nothing but polymorphism. The behaviors changes based on the places.",
              "Another good real-time example of polymorphism is water. We all know that water is a liquid at normal temperature, but it changes to a solid when it is frozen, and the same water changes to a gas when it is heated at its boiling point. This is also polymorphism."]
    }, {
      Question: "Type of polymorphism?",
      Ans: "There are two types of polymorphism in C#. They are as follows:",
      Ponts: ["Static Polymorphism / Compile-Time Polymorphism / Early Binding",
              "Dynamic Polymorphism / Run-Time Polymorphism / Late Binding"]
    }, {
      Question: "What is method overloading? Example of method Overloading?",
      Ans: "Method Overloading means it is an approach to defining multiple methods under the class with a single name. So, we can define more than one method with the same name in a class. But the point that you need to remember the parameters of all those methods should be different (different in terms of number, type, and order of the parameters). So, if we are defining multiple methods with the same name but with a different signature in a class or in the Parent and Child Classes, then it is called Method Overloading in C#. That means C#.NET not only allows method overloading in the same class but also allows method overloading in Parent and Child classes. So, we can create a method in the Derived/Child class with the same name as the method name defined in the Base/Parent class in C#. In simple words, we can say that the Method Overloading in C# allows a class to have multiple methods with the same name but with a different signature. The functions or methods can be overloaded based on the number, type (int, float, etc), order, and kind (Value, Ref or Out) of parameters.",
      Points: ["Suppose you are working on a maintenance project. And you are going to work on a class where already some parameterized constructors have been defined and you need to pass some additional parameters. So what you will do, whether you will add the required parameter with one of the already defined constructors or add a new constructor as per your requirement? In such cases, you should not add the required parameter with the already defined constructor because this may disturb your other class dependency structure. So what you will do is create a new constructor with the required parameter. That new constructor that you are creating is nothing but the Constructor Overloading in C#."]
    }, {
      Question: "When we should use method overloading?",
      Ans: "Suppose you are working on a maintenance project. And you are going to work on a class where already some parameterized constructors have been defined and you need to pass some additional parameters. So what you will do, whether you will add the required parameter with one of the already defined constructors or add a new constructor as per your requirement? In such cases, you should not add the required parameter with the already defined constructor because this may disturb your other class dependency structure. So what you will do is create a new constructor with the required parameter. That new constructor that you are creating is nothing but the Constructor Overloading in C#."
    }, {
      Question: "What are different name used for method overloading?",
      Ans: "Method Overloading, Operator Overloading, Method Hiding"
    }, {
      Question: "What is method overriding?",
      Ans: "The process of re-implementing the superclass non-static, non-private, and non-sealed method in the subclass with the same signature is called Method Overriding in C#. The same signature means the name and the parameters (type, number, and order of the parameters) should be the same. "
    }, {
      Question: "How to achieve method overriding?",
      Ans: "If you want to override the Parent class method in its Child classes, first the method in the parent class must be declared as virtual by using the virtual keyword, then only the child classes get permission for overriding that method. Declaring the method as virtual is marking the method as overridable. If the child class wants to override the parent class virtual method, then the child class can override it with the help of the override modifier. But overriding the parent class virtual methods under the child classes is not mandatory. "
    }, {
      Question: "Is it mandatory to implement virtual method of base class in child class?",
      Ans: ""
    }, {
      Question: "Can we override non-virtual method?",
      Ans: "No"
    }, {
      Question: "Can we use the virtual modifier with static, abstract, private or override modifiers?",
      Ans: "No"
    }, {
      Question: "Can we use virtual for internal, protected and protected internal?",
    }, {
      Question: "What are different names/terms used for overriding?",
    }, {
      Question: "If parent class virtual method and child have same method without override keyword, will code be compiled?",
      Ans: "No"
    }, {
      Question: "In above case which error/ warning will be shown?",
    }, {
      Question: "What is “new” keyword in method overriding?",
      Ans: "The new keyword explicitly tells us that you are hiding the base class or parent class members inside the child class. Even if you are not using the new keyword, then also you can re-implement the method under the child, but in that case, you will get a warning from the compiler."
    }, {
      Question: "When to use “new” keyword in method overriding?",
      Ans: "The 'new' keyword is used to hide a method, property, indexer, or event of the base class into the derived class. If a method is not overriding the derived method then it is hiding it. A hiding method must be declared using the new keyword."
    }, {
      Question: "What’s the difference between new and override keyword?",
      Ans: "The override modifier extends the base class virtual method, and the new modifier hides an accessible base class method."
    }, {
      Question: "Can we allow a class to be inherited but prevent method to be overridden?",
      Ans: "Yes"
    }, {
      Question: "What is Params keyword?",
      Ans: "params is a special keyword that allows passing a variable number of parameters into a method. It allows a nice, flexible syntax that helps us specify:",
      Points: ["One or multiple parameters separated by commas (that’s the ‘killer feature’)", "No parameters at all", "A single parameter of a single-dimensional array type"]
    }, {
      Question: "How to achieve method overloading through Params?",
    }, {
      Question: "Order of params parameters?",
      Ans: "There is no defined order for the parameters (just param arrays need to in the last). "
    }, {
      Question: "What is abstract class?",
      Ans: "A class under which we define abstract methods is known as an abstract class. As per object-oriented programming, we need to define a method inside a class. And, we cannot define the abstract methods directly anywhere, we need to define the abstract method inside an abstract class only."
    }, {
      Question: "What is the syntax of abstract class?",
      Ans: "public abstract class Calculator { public abstract void Add(int num1, int num2);}"
    }, {
      Question: "What is the abstract method?",
      Ans: "A method without the body is known as Abstract Method, what the method contains is only the declaration of the method. That means the abstract method contains only the declaration, no implementation."
    }, {
      Question: "Can we declare abstract method as private?",
      Ans: "No, you cannot declare private and abstract modifiers simultaneously as abstract methods talks about the declaration and private methods talks about implementation.",
      SubHeadinng: "abstract never form combination with following modifier :",
      Points: ["final", "native", "synchronized", "strictfp", "static", "private"]
    }, {
      Question: "Can we create instance of abstract class?",
      Ans: "No"
    }, {
      Question: "Can abstract class inherit another class?",
      Ans: "Yes"
    }, {
      Question: "Can abstract class inherit interface?",
      Ans: "Yes"
    }, {
      Question: "Can abstract class have constructor?",
      Ans: "Yes, an abstract class can have a constructor, even though an abstract class cannot be instantiated. An abstract class constructor c# code example will be explained. But, the next question can also be arises, as if we cannot instantiate (construct an object using new) an abstract class, then what for a constructor is in an abstract class or why should we use a constructor in abstract class?, Note that when we create an object of a derived class then the constructor of the abstract base class is implicitly called, even though we cannot instantiate an abstract class. For example in the program, if we create an object of a derived class then the abstract base class constructor will also be called."
    }, {
      Question: "Can we declare abstract class as static?",
      Ans: "No"
    }, {
      Question: "Can we declare static method in abstract class?",
      Ans: "Yes, You can have static methods in abstract classes. If you declare a static method in an abstract class, you must provide its implementation. Static methods are not associated with instances of the class. Therefore, the static method declared in an abstract class should be called using the class name that defined it."
    }, {
      Question: "Difference between Abstract class and interface?",
      Ans: "Difference between Abstract Class and Interface",
      Points: ["An abstract class doesn't provide full abstraction but an interface does provide full abstraction; i.e. both a declaration and a definition is given in an abstract class but not so in an interface.",
              "Using abstract we cannot achieve multiple inheritance but using an Interface we can achieve multiple inheritance.",
            "We can not use any access modifier i.e. public, private, protected, internal etc., because within an interface by default everything is public.",
            "An Interface member cannot be defined using the keyword static, virtual, abstract or sealed."]
    },{
      Question: "Why do we need OOP?",
      Ans: "OOPs provide some principles and by using those principles we can develop real-world objects in a programming language by achieving Reusability, Extensibility, Simplicity, and Maintainability.",
      Points: ["OOP provides a clear structure for the programs", "OOP helps to keep the C# code DRY 'Don't Repeat Yourself', and makes the code easier to maintain, modify and debug", "OOP makes it possible to create full reusable applications with less code and shorter development time"]
    },{
      Question: "What are the important pillars in OOP?",
      Ans: "OOPs, provide 4 principles. They are",
      Points: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"]
    },{
      Question: "Abstraction VS Encapsulation ?",
      Ans: "Differences between Abstraction and Encapsulation",
      Points: ["The Encapsulation Principle is all about data hiding (or information hiding). On the other hand, the Abstraction Principle is all about detailed hiding (implementation hiding).",
              "Using the Encapsulation principle, we can protect our data i.e. from outside the class, nobody can access the data directly. We are exposing the data through publicly exposed methods and properties. The advantage is that we can validate the data before storing and returning it. On the other hand, using the Abstraction Principle, we are exposing only the services so that the user can consume the services but how the services/methods are implemented is hidden from the user. The user will never know, how the method is implemented.",
            "With the Encapsulation Principle, we group data members and member functions into a single unit called class, interface, enum, etc. On the other hand, with the Abstraction Principle, we are exposing the interface or abstract class to the user and hiding implementation details i.e. hiding the child class information.",
            "We can implement Encapsulation by declaring the data members as private and exposing the data members only through public exposed methods and properties with proper validation. On the other hand, we can implement abstraction through abstract classes and interfaces.",
            "Abstraction in C# is used to hide unwanted data and shows only the required properties and methods to the user. Encapsulation in C# is used to bind data members and member functions into a single unit to prevent outsiders from accessing it directly."]
    },{
      Question: "Explain Virtual Keyword ?",
      Ans: "f you want to override the Parent class method in its Child classes, first the method in the parent class must be declared as virtual by using the virtual keyword, then only the child classes get permission for overriding that method. Declaring the method as virtual is marking the method as overridable. If the child class wants to override the parent class virtual method, then the child class can override it with the help of the override modifier. But overriding the parent class virtual methods under the child classes is not mandatory."
    },{
      Question: "Method Overloading ?",
      Ans: "Method Overloading in C#",
      SubHeading: "",
      Points: ["It is an approach to defining multiple methods with the same name but with a different signature means by changing the number, type, and order of parameters.",
              "Overloading a method can be performed within a class as well as between the Parent-Child classes also.",
              "To overload a parent class method under the child classes, the child class does not require to take any permission from the parent.",
              "This is all about defining multiple behaviors to a method.",
              "Used to implement static polymorphism.",
              "No separate keywords are used to implement function overloading."],
    },{
      Question: "Method Overriding in C#?",
      Ans: " Difference between Method Overloading and Method ",
      Points: ["It is an approach to defining multiple methods with the same name and with the same signature means the same number, type, and order of parameters.",
              "Overriding of methods is not possible within the same class it must be performed under the child classes only.",
              "To override a parent class method under the child classes, first, the child class requires to take permission from its parent.",
              "This is all about changing the behavior of a method.",
              "Used to implement dynamic polymorphism.",
              "Use the virtual keyword for the base class function and override keyword in the derived class function to implement function overriding."],
    },{
      Question: "Can Polymorphism work without Inheritance ?",
      Ans: "Real polymorphism in General can not be acheived without inheritance."
    },{
      Question: "Explain Static Polymorphism ?",
      Ans: "In compile time polymorphism, the compiler identifies which method is being called at the compile time.",
      SubHeading: "In C#, we achieve compile time polymorphism through 2 ways:",
      Points: ["Method overloading", "Operator overloading"]
    },{
      Question: "Explain Dynamic Polymorphism ?",
      Ans: "In runtime polymorphism, the method that is called is determined at the runtime not at compile time.",
      SubHeading: "The runtime polymorphism is achieved by:",
      Points: ["Method Overriding"]
    },{
      Question: "Explain Operator Overloading ?",
      Ans: "In C#, it is possible to make operators work with user-defined data types like classes. That means C# has the ability to provide the operators with a special meaning for a data type, this ability is known as operator overloading. For example, we can overload the + operator in a class like String so that we can concatenate two strings by just using +. Using operator overloading in C# we can specify more than one meaning for an operator in one scope. The purpose of operator overloading is to provide a special meaning of an operator for a user-defined data type."
    },{
      Question: "Why do we need Abstract Classes ?",
      Ans: "When to use an abstract class",
      Points: ["An abstract class is a good choice if we are using the inheritance concept since it provides a common base class implementation to derived classes.",
              "An abstract class is also good if we want to declare non-public members. In an interface, all methods must be public.",
              "If in case we need to add new methods to the class in the future, then an abstract class is a better choice than an interface because if we add new methods to an interface, then all of the classes implementing that interface will have to be changed to implement the new methods.",
              "If we want to declare non-static or non-final fields then the abstract class enables you to do this but in the interface, all fields are by default public, static, and final.",
              "If we want to provide common, implemented functionality among all implementations of our component, use an abstract class. Abstract classes allow us to partially implement our class, whereas interfaces contain no implementation for any members."]
    },{
      Question: "Are Abstract methods Virtual ?",
      Ans: "Abstract methods are also implicitly virtual in nature but you cannot use the virtual keyword when declaring an abstract method."
    },{
      Question: "Is it compulsory to implement Abstract Methods ?",
      Ans: "Yes, you must implement all abstract methods."
    },{
      Question: "Why simple base class cannot replace Abstract Classes?",
      Ans: "The abstract class enables the best way to execute the process of data abstraction by providing the developers with the option of hiding the code implementation."
    },{
      Question: "Explain Interface and Why do we need it ?",
      Ans: "The Interface in C# is a fully un-implemented class used for declaring a set of methods of an object. So, we can define an interface as a pure abstract class which allows us to define only abstract methods. The abstract method means a method without a body or implementation.",
      Points: ["It is used to achieve multiple inheritances which can’t be achieved by class. It is used to achieve full abstraction because it cannot have a method body.",
              "Its implementation must be provided by class or struct. The class or struct which implements the interface must provide the implementation of all the methods declared inside the interface."]
    },{
      Question: "Can we write logic in Interface ?",
      Ans: "No"
    },{
      Question: "Can we define methods as private in Interface ?",
      Ans: "No, nterface cannot include private, protected, or internal members. All the members are public by default.",
      SubHeading: "C# 8.0 allows private, protected, internal, public, virtual, abstract, sealed, static, extern, and partial modifiers in an interface.",
      Points: ["The default access level for all interface members is public.",
              "An interface member whose declaration includes a body is a virtual member unless the sealed or private modifier is used.",
              "A private or sealed function member of an interface must have implementation body.",
              "Interfaces may declare static members which can be accessed by interface name."]
    },{
      Question: "To change Interface what's the best practice ?"
    },{
      Question: "Explain Multiple Inheritance in Interfaces ?"
    },{
      Question: "Explain Interface Segregation Principle ?"
    },{
      Question: "Can we create instance of Interface ?",
      Ans: "No"
    },{
      Question: "Can we do multiple inheritance of Interface ?",
      Ans: "Yes"
    },{
      Question: "What is Inheritance? Why Inheritance is important?"
    },{
      Question: "What are the different types of Inheritance?"
    },{
      Question: "How to prevent a class from being Inherited?",
      Ans: "Make the class as private or sealed"
    },{
      Question: "What is Abstraction?"
    },{
      Question: "What is Encapsulation?"
    },{
      Question: "In how many ways a method can be overloaded?"
    },{
      Question: "What is the difference between Overloading and Overriding?"
    },{
      Question: "What are the advantages and limitations of OOPS?"
    },{
      Question: " What is the difference between an Abstract class and an Interface (atleast 4)?"
    },{
      Question: "When to use Interface and when Abstract class?"
    },{
      Question: "Why to even create Interfaces?"
    },{
      Question: "Do Interface can have a Constructor?"
    },{
      Question: "Can you create an instance of an Interface?",
      Ans: "No"
    },{
      Question: "What are Access Specifiers? What is the default access modifier in a class?"
    },{
      Question: "What is Boxing and Unboxing?"
    },{
      Question: "What is the difference between “String” and “StringBuilder”? When to use what?"
    },{
      Question: "What are the basic string operations in C#?"
    },{
      Question: "What are Nullable types?"
    },{
      Question: "Explain Generics in C#? When and why to use them?"
    },{
      Question: "How to implement Exception Handling in C#?"
    },{
      Question: "Can we execute multiple Catch blocks?",
      Ans: "No"
    },{
      Question: "What is a Finally block and give an example when to use it?"
    },{
      Question: "Can we have only “Try” block without “Catch” block?"
    },{
      Question: "What is the difference between “throw ex” and “throw”?"
    },{
      Question: "What are the Loop types in C#?"
    },{
      Question: "What is the difference between “continue” and “break” statement?"
    },{
      Question: "What is the difference between Array and ArrayList (atleast 2)?"
    },{
      Question: "What is the difference between Arraylist and Hashtable?"
    },{
      Question: "What are Collections in C# and what are their types?"
    },{
      Question: "What is IEnumerable in C#?"
    },{
      Question: "What is the difference between IEnumerable and IEnumerator in C#?"
    },{
      Question: "What is the difference between IEnumerable and IQueryable in C#? Why to use IQueryable in sql queries?"
    },{
      Question: "What is the difference between “out” and “ref” parameters?"
    },{
      Question: "What is the purpose of “params” keyword?"
    },{
      Question: "What is a Constructor and what are its types?"
    },{
      Question: "When to use Private constructor?"
    },{
      Question: "What are Extension Methods in C#? When to use them?"
    },{
      Question: "What you mean by Delegate? When to use them?"
    },{
      Question: "What are Multicast Delegates?"
    },{
      Question: "What are Anonymous Delegates in C#?"
    },{
      Question: "What are the differences between Events and Delegates?"
    },{
      Question: "What is “this” keyword in C#? When to use it?",
      Ans: "The “this” keyword in C# is used to refer to the current instance of the class. It is also used to differentiate between the method parameters and class fields if they both have the same name. Another usage of “this” keyword is to call another constructor from a constructor in the same class."
    },{
      Question: "What is the purpose of “using” keyword in C#?",
      Ans: "There are two ways to use the using in C#. One is as a directive and the other is as a statement. Let's explain!",
      Points: ["Generally, we use the using keyword to add namespaces in code-behind and class files. Then it makes all the classes, interfaces and abstract classes and their methods and properties available in the current page. Adding a namespace can be done in the following two ways,",
               "(1) To allow the normal use of types in a namespace,",
               "(2) To create an alias for a namespace or a type. This is called a using alias directive. ",
                "The using statement ensures that DIPOSE() method of the class. Object is called even if an exception occurs.",
                "Mostly used while creating databse connections."]
    },{
      Question: "What is the difference between “is” and “as” operators?",
      Ans: "Is Operator is used to Check the Compatibility of an Object with a given Type and it returns the result as a Boolean i.e. True Or False. As Operator is used for Casting of Object to a given Type or a Class. The as keyword is used to cast nullable types if the specified value is not an instance of the specified type."
    },{
      Question: "What is the difference between “Readonly” and “Constant” variables (atleast 3)?",
      Ans: "Difference between const and readonly",
      Points: ["const fields has to be initialized while declaration only, while readonly fields can be initialized at declaration or in the constructor.",
              "const variables can declared in methods ,while readonly fields cannot be declared in methods.",
              "const fields cannot be used with static modifier, while readonly fields can be used with static modifier.",
              "A const field is a compile-time constant, the readonly field can be used for run time constants."]
    },{
      Question: "What is “Static” class? When to use it?",
      Ans: "The class which is created by using the static modifier is called a static class in C#. A static class can contain only static members. It is not possible to create an instance of a static class. This is because it contains only static members. And we know we can access the static members of a class by using the class name. ",
      Points: ["When we use Static Class",
               " are perfect for implementing utilities. Applications that don’t need any modifications or utility classes could use static classes. For example, in-built classes such as Math and System.Convert are some of the commonly used static classes. ",
               "Static classes consume fewer resources. They do not require instantiation, hence, duplicate objects don’t take up additional memory space. Theoretically, static classes offer better performance than their non-static counterparts. This is usually unnoticeable in practical applications.",
              "To use extension methods in our app, we have to use static classes.",
              "When We Should Not Use Static Classes?",
              "Static classes break the Object-Oriented Programming principle of polymorphism. It is difficult to change the functionality of a static class without modifying it. For example, creating child classes from non-static classes helps programmers extend existing functionalities without making changes to parent classes. ",
              "Static classes cannot be defined through interfaces. They become infeasible when we need to reuse them when implementing interfaces.",
              "As the functionality of a static method grows, it could result in the use of parameters that may not be needed. This is called parameter creep. The solution to this problem is to create derivative classes and overriding methods to support additional functionalities. However, as we have discussed in the previous points, static classes do not support inheritance and method overriding. ",
              "Replacing the production code with the test code could be problematic during testing processes. We would need to use wrapper classes to test static classes. "]
    },{
      Question: "What is “var” in C#?",
      Ans: "Var in C#",
      Points: ["var is known as a statically typed variable which means that the data type of these variables is identified at compile time which is done based on the type of value that these variables are initialized with.",
               "var in C# was introduced as part of C# 3.0.",
               "In the case of var, the data type of the variable is identified by the compiler at the compilation time only.",
               "In the case of var, it is mandatory to initialize the variable at the time of its declaration, so that the compiler comes to know the data type of the variable according to the right-hand side value assigned to it.",
               "It will throw an error if the variable does not initialize at the time of its declaration.",
               "Var cannot be used to declare method parameters and method return type in C#. It can only be used as a local variable declaration inside a function.",
               "Var is early bounded. This means the type of variable declared is decided by the compiler at compile time."]
    },{
      Question: "What is “dynamic” in C#?",
      Ans: "Dynamic in C#",
      Points: ["Dynamic is known as a dynamically typed variable which means that the data type of these variables is identified at runtime which is done based on the type of value that these variables are initialized with.",
               "Dynamic in C# was introduced in C#4.0.",
               "In the case of dynamic, the data type of variable is identified by the CLR at run time.",
               "In the case of dynamic, it is not mandatory to initialize the variable at the time of its declaration.",
               "It will not throw an error if the variable does not initialize at the time of its declaration.",
               "Dynamic can be used to declare method parameters and method return type in C#. It can also be used as a local variable declaration inside a function.",
               "Dynamic is Late Bounded. This means the type of variable declared is decided by the CLR at runtime time."]
    },{
      Question: "What is Enum keyword used for?",
      Ans: "enum (also called enumeration) is a user-defined value type used to represent a list of named integer constants. It is created using the enum keyword inside a class, structure, or namespace. It improves a program’s readability, maintainability and reduces complexity."
    }
    ]
  }

  showSection(item: any) {
    if (item)
      this.CurrentSection = item;
  }

}
