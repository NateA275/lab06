'use strict';

var hoursOfOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm']; //Array representing all active hours of operation
var allVendors = []; //Array of all Vendor Objects
var dailyAllCookiesSold = 0; //Accumulated value of all cookies sold per day of operations
var newRow; //Holds new row to be appended to newTable
var newElement; //Holds new element to be appended to newRow
var i, j; //Holds value for iterators
var salesHead = document.getElementById('salesHead'); //Location of Header in sales.html
var salesBody = document.getElementById('salesBody'); //Location of Body in sales.html
var salesFoot = document.getElementById('salesFoot'); //Location of Foot in sales.html
var formElement = document.getElementById('addVendorForm'); //Location of all form data inputs
formElement.addEventListener('submit', handleNewVendor); //Form SUBMIT event listener

/**
 * Vendor Constructor
 * @constructor
 * @param {string} storeLocation - name of vendor loction
 * @param {number} min - lower limit of range of average customers
 * @param {number} max - upper limit of range of average customers
 * @param {number} avg - average cookies bought per
 */
function Vendor(storeLocation, min, max, avg) {
  this.storeLocation = storeLocation;
  this.minCustomersPerHour = min;
  this.maxCutomersPerHour = max;
  this.avgCookiesPerPurchase = avg;
  this.customersPerHour = [];
  this.cookiesSoldPerHour = [];
  this.dailyTotal = 0;
  allVendors.push(this);
  this.generateCustomersPerHour();
  this.calculateTotalSales();
  this.renderRow();
  this.renderFooter();
}

/**
 * Populates Random Integer Array representing number of customers per hour of operation
 */
Vendor.prototype.generateCustomersPerHour = function() {
  for(i = 0; i < hoursOfOperation.length; i++) {
    var num = Math.round(Math.random() * (Number(this.maxCutomersPerHour) - Number(this.minCustomersPerHour)) + Number(this.minCustomersPerHour));
    this.customersPerHour.push(num);
  }
};

/**
 * Populates array of integers representing number of cookies sold per hour of operation
 * Accumulates number of cookies sold per location per day
 * Adds number of daily cookies sold to accumulator for all locations for the day
 */
Vendor.prototype.calculateTotalSales = function() {
  for(i = 0; i < hoursOfOperation.length; i++) {
    var numberSold = Math.round(this.customersPerHour[i] * this.avgCookiesPerPurchase);
    this.cookiesSoldPerHour.push(numberSold);
    this.dailyTotal += numberSold;
  }
  dailyAllCookiesSold += this.dailyTotal;
};

/**
 * Creates a new row and appends it to table body
 */
Vendor.prototype.renderRow = function() {
  newRow = document.createElement('tr');
  newElement = document.createElement('th');
  newElement.textContent = (this.storeLocation).toUpperCase();
  newRow.appendChild(newElement);
  for(i = 0; i < hoursOfOperation.length; i++) {
    newElement = document.createElement('td');
    newElement.textContent = this.cookiesSoldPerHour[i];
    newRow.appendChild(newElement);
  }
  newElement = document.createElement('td');
  newElement.textContent = this.dailyTotal;
  newRow.appendChild(newElement);
  salesBody.appendChild(newRow);
};

/**
 * Calculates Hourly Totals and Populates them to table footer
 */
Vendor.prototype.renderFooter = function() {  
  salesFoot.innerHTML = ''; //Reset for subsequent calls
  newRow = document.createElement('tr');
  newElement = document.createElement('th');
  newElement.textContent = 'ON THE HOUR';
  newRow.appendChild(newElement);
  for(i = 0; i < hoursOfOperation.length; i++) {
    var hourlyTotal = 0;
    for(j = 0; j < allVendors.length; j++) {
      hourlyTotal += allVendors[j].cookiesSoldPerHour[i];
    }
    newElement = document.createElement('td');
    newElement.textContent = hourlyTotal;
    newRow.appendChild(newElement);
  }
  newElement = document.createElement('td');
  newElement.textContent = dailyAllCookiesSold;
  newRow.appendChild(newElement);
  salesFoot.appendChild(newRow);
};

/**
 * Renders header to sales.html
 */
function renderHeader() {
  newRow= document.createElement('tr');
  newElement = document.createElement('th');
  newRow.appendChild(newElement);
  for(i = 0; i < hoursOfOperation.length; i++) {
    newElement = document.createElement('th');
    newElement.textContent = hoursOfOperation[i];
    newRow.appendChild(newElement);
  }
  newElement = document.createElement('th');
  newElement.textContent = 'ON THE DAY';
  newRow.appendChild(newElement);
  salesHead.appendChild(newRow);
}

/**
 * Event handler calls Vendor constructor with form input values
 * @param {*} event triggered by submit button at formElement
 */
function handleNewVendor(event) {
  event.preventDefault(); //Prevents Page From Refreshing
  var vendorElement = event.target;
  var formName = vendorElement.vendorLocation.value; //Gets value from Location text box
  var formMin = vendorElement.min.value; //Gets number from Min Cust/Hour box
  var formMax = vendorElement.max.value; //Gets number from Max Cust/Hour box
  var formAvg = vendorElement.avg.value; //Gets number from Avg Qty/Purchase
  new Vendor(formName, formMin, formMax, formAvg);
  document.getElementById('addVendorForm').reset(); //Reset input fields in form
}

/**
 * Logic
 */
new Vendor('1st and Pike', 23, 65, 6.3);
new Vendor('SeaTac Airport', 3, 24, 1.2);
new Vendor('Seattle Center', 11, 38, 3.7);
new Vendor('Capitol Hill', 20, 38, 2.3);
new Vendor('Alki', 2, 16, 4.6);
renderHeader();