const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Traverse', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Blogs schema and model
const projectSchema = new mongoose.Schema({
    projectName: String,
    projectLink: String,
    authorName: String,
    authorID: String,
}, { collection: 'Blogs' });

const Blogs = mongoose.model('Blogs', projectSchema);

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


//End of Blog Post

//Start of User Schema

mongoose.connect('mongodb://localhost:27017/Traverse', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected successfully");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && user.password === password) {
            // Passwords match, so user is successfully logged in
            res.json({ success: true, message: 'Login successful' });
        } else {
            // Invalid email or password
            res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.get('/createAccount', (req, res) => {
    res.sendFile(__dirname + '/public/signup.html');
});

app.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.json({ success: false, message: 'Email already exists' });
        } else {
            const newUser = new User({ name, email, password });
            await newUser.save();

            // Redirect to user's profile page on successful signup
            res.json({ success: true, message: 'Sign up successful' });
        }
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


// End of Login and Signup


app.post('/upload', async (req, res) => {
    try {
        const { projectName, projectLink, authorName, authorID } = req.body;

        // Create a new blog document
        const blog = new Blogs({
            projectName,
            projectLink,
            authorName,
            authorID,
        });

        // Save the blog to MongoDB
        const savedBlog = await blog.save();
        console.log('Blog saved to MongoDB:', savedBlog);
        res.json({ message: 'Blog uploaded successfully' });
    } catch (error) {
        console.error('Error saving blog to MongoDB:', error);
        res.status(500).json({ error: 'Failed to upload blog' });
    }
});

app.get('/codes', (req, res) => {
    // Route for fetching all code data
});


//Contact Us

mongoose.connect('mongodb://localhost:27017/Traverse', );

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

app.use(bodyParser.json());

app.use(express.static('public'));


app.post('/submit-contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Respond with a success message
    res.json({ success: true, message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});


//Subscription 

mongoose.connect('mongodb://localhost:27017/Traverse', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const subscriptionSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    bkashTransactionId: String,
    subscription: String
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/subscribe', async (req, res) => {
    try {
        const { name, email, phone, bkash, subscription } = req.body;
        const newSubscription = new Subscription({ name, email, phone, bkashTransactionId: bkash, subscription });
        await newSubscription.save();
        res.redirect('/');
    } catch (error) {
        console.error('Error saving subscription to MongoDB:', error);
        res.status(500).send('Failed to subscribe');
    }
});


// Tour And Hotel Connection DB

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Traverse', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

// Define schema
const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    place: String,
    bookingType: String
});

// Create model
const Booking = mongoose.model('Booking', bookingSchema);

// Create Express 
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submissions
app.post('/book', async (req, res) => {
    try {
        // Extract data from request body
        const { name, email, phone, place, bookingType } = req.body;
        
        // Create new Booking document
        const newBooking = new Booking({ name, email, phone, place, bookingType });
        
        // Save the booking to MongoDB
        await newBooking.save();
        res.redirect('/');
        // Respond with success message
        
    } catch (error) {
        console.error('Error saving booking to MongoDB:', error);
        res.status(500).send('Failed to book');
    }
});






// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
