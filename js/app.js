'use strict';

/**
 * Variables
 */
var hoursOfOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm']; //Array representing all active hours of operation
var allVendors = []; //Array of all Vendor Objects
var dailyAllCookiesSold = 0; //Accumulated value of all cookies sold per day of operations
var salesTable = document.getElementById('salesTable'); //Location of Table in sales.html
var newRow; //Holds new row to be appended to newTable
var newElement; //Holds new element to be appended to newRow
var i, j; //Holds value for iterators

/**
 * Object Constructor
 * TODO find out how JS docs work
 * @param storeLocation string name of vendor loction
 * @param min number lower limit of range of average customers
 * @param max number upper limit of range of average customers
 * @param avg number average cookies bought per transaction
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
}

/**
 * Populates Random Integer Array representing number of customers per hour of operation
 */
Vendor.prototype.generateCustomersPerHour = function() {
  for(i = 0; i < hoursOfOperation.length; i++) {
    var num = Math.round(Math.random() * (this.maxCutomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);
    this.customersPerHour.push(num);
  }
  console.log(this.storeLocation + ' customers generated.');
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
  console.log(this.storeLocation + ' sales generated.');
};

/**
 * Renders Results to sales.html site in table format
 * TODO Put this function out of it's misery
 */
function renderSalesData() {
  //RENDER HEAD
  newRow = document.createElement('tr');
  newElement = document.createElement('th');
  newRow.appendChild(newElement);
  for(i = 0; i < hoursOfOperation.length; i++) {
    newElement = document.createElement('th');
    newElement.textContent = hoursOfOperation[i];
    newRow.appendChild(newElement);
  }
  newElement = document.createElement('th');
  newElement.textContent = 'Daily  Total';
  newRow.appendChild(newElement);
  salesTable.appendChild(newRow);

  //RENDER BODY
  for(i = 0; i < allVendors.length; i++) {
    newRow = document.createElement('tr');
    newElement = document.createElement('th');
    newElement.textContent = allVendors[i].storeLocation;
    newRow.appendChild(newElement);
    for(j = 0; j < hoursOfOperation.length; j++) {
      newElement = document.createElement('td');
      newElement.textContent = allVendors[i].cookiesSoldPerHour[j];
      newRow.appendChild(newElement);
    }
    newElement = document.createElement('td');
    newElement.textContent = allVendors[i].dailyTotal;
    newRow.appendChild(newElement);
    salesTable.appendChild(newRow);
  }

  //RENDER FOOTER
  newRow = document.createElement('tr');
  newElement = document.createElement('th');
  newElement.textContent = 'Hourly Totals';
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
  salesTable.appendChild(newRow);
}

/**
 * Logic
*/
var firstAndPike = new Vendor('1st and Pike', 23, 65, 6.3);
console.log(firstAndPike);
var seaTacAirport = new Vendor('SeaTac Airport', 3, 24, 1.2);
console.log(seaTacAirport);
var seattleCenter = new Vendor('Seattle Center', 11, 38, 3.7);
console.log(seattleCenter);
var capitolHill = new Vendor('Capitol Hill', 20, 38, 2.3);
console.log(capitolHill);
var alki = new Vendor('Alki', 2, 16, 4.6);
console.log(alki);
renderSalesData();