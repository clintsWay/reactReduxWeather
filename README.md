# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

<!-- if you get an error that says cannot read the property XXXX
of undefined.  in this case the property was setState.  if you use
an arrow function that would make the this look at the component and not the function or if you change the this in the constructor like this.onInputChange = this.onInputChange.bind(this); this sets the this on the submit to the component of the constructor.  -->

<!-- if you form submits and your arguments disappear check to
make sure you didn't for get to put something like this in your
sumbit method event.preventDefault(); -->

<!-- the way this program is set up the hidden key protects your key from people seeing it in github but when you fetch data from the api your key is exposed in the browser in the console and network tab.  the solution would be to have the server fetch the
data from the api and then pass it to the user.  -->
