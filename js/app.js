'use strict';

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var dailyTotalSales = 0;
var ulElement;
var listElement;

var firstAndPike = {
  location: '1st and Pike',
  minCustHour: 23,
  maxCustHour: 65,
  avgNumPer: 6.3,
  custPerHour: [],
  salesPerHour: [],
  dailyTotal: 0,
  storeMin: function(num) { //@param num minimum number of customers per hour
    this.minCustHour = num;
  },
  storeMax: function(num) { //@param num maximum number of customers per hour
    this.maxCustHour = num;
  },
  storeAvgPer: function(num) { //@param num avg number purchased per customer
    this.avgNumPer = num;
  },
  getSalesPerHour: function() { //Store number customers per hour
    for(var i = 0; i < hoursOfOperation.length; i++) {
      this.custPerHour.push(Math.floor((Math.random() * (this.maxCustHour - this.minCustHour) + this.minCustHour)));
    }
  },
  storeResultsPerHour: function() { // Store number sales per hour and calculate daily total
    for(var i = 0; i < hoursOfOperation.length; i++) {
      var numberSold = Math.round(this.custPerHour[i] * this.avgNumPer);
      this.salesPerHour.push(numberSold);
      this.dailyTotal += numberSold;
    }
    dailyTotalSales += this.dailyTotal;
  },
  renderResults: function() {
    ulElement = document.getElementById('firstAndPike');
    listElement = document.createElement('ul');
    listElement.textContent = (this.location);
    ulElement.appendChild(listElement);

    for(var i = 0; i < hoursOfOperation.length; i++) {
      listElement= document.createElement('li');
      listElement.textContent = hoursOfOperation[i] + ': ' + this.salesPerHour[i] + ' cookies';
      ulElement.appendChild(listElement);
    }
    listElement = document.createElement('li');
    listElement.textContent = 'Total: ' + this.dailyTotal + ' cookies';
    ulElement.appendChild(listElement);
  }
};

var seaTacAirport = {
  location: 'SeaTac Airport',
  minCustHour: 3,
  maxCustHour: 24,
  avgNumPer: 1.2,
  custPerHour: [],
  salesPerHour: [],
  dailyTotal: 0,
  storeMin: function(num) { //@param num minimum number of customers per hour
    this.minCustHour = num;
  },
  storeMax: function(num) { //@param num maximum number of customers per hour
    this.maxCustHour = num;
  },  
  storeAvgPer: function(num) { //@param num avg number purchased per customer
    this.avgNumPer = num;
  },
  getSalesPerHour: function() { //Store number customers per hour
    for(var i = 0; i < hoursOfOperation.length; i++) {
      this.custPerHour.push(Math.floor((Math.random() * (this.maxCustHour - this.minCustHour) + this.minCustHour)));
    }
  },
  storeResultsPerHour: function() { // Store number sales per hour and calculate daily total
    for(var i = 0; i < hoursOfOperation.length; i++) {
      var numberSold = Math.round(this.custPerHour[i] * this.avgNumPer);
      this.salesPerHour.push(numberSold);
      this.dailyTotal += numberSold;
    }
    dailyTotalSales += this.dailyTotal;
  },
  renderResults: function() {
    ulElement = document.getElementById('seaTacAirport');
    listElement = document.createElement('ul');
    listElement.textContent = (this.location);
    ulElement.appendChild(listElement);

    for(var i = 0; i < hoursOfOperation.length; i++) {
      listElement= document.createElement('li');
      listElement.textContent = hoursOfOperation[i] + ': ' + this.salesPerHour[i] + ' cookies';
      ulElement.appendChild(listElement);
    }
    listElement = document.createElement('li');
    listElement.textContent = 'Total: ' + this.dailyTotal + ' cookies';
    ulElement.appendChild(listElement);
  }
};

var seattleCenter = {
  location: 'Seattle Center',
  minCustHour: 11,
  maxCustHour: 38,
  avgNumPer: 3.7,
  custPerHour: [],
  salesPerHour: [],
  dailyTotal: 0,
  storeMin: function(num) { //@param num minimum number of customers per hour
    this.minCustHour = num;
  },
  storeMax: function(num) { //@param num maximum number of customers per hour
    this.maxCustHour = num;
  },  
  storeAvgPer: function(num) { //@param num avg number purchased per customer
    this.avgNumPer = num;
  },
  getSalesPerHour: function() { //Store number customers per hour
    for(var i = 0; i < hoursOfOperation.length; i++) {
      this.custPerHour.push(Math.floor((Math.random() * (this.maxCustHour - this.minCustHour) + this.minCustHour)));
    }
  },
  storeResultsPerHour: function() { // Store number sales per hour and calculate daily total
    for(var i = 0; i < hoursOfOperation.length; i++) {
      var numberSold = Math.round(this.custPerHour[i] * this.avgNumPer);
      this.salesPerHour.push(numberSold);
      this.dailyTotal += numberSold;
    }
    dailyTotalSales += this.dailyTotal;
  },
  renderResults: function() {
    ulElement = document.getElementById('seattleCenter');
    listElement = document.createElement('ul');
    listElement.textContent = (this.location);
    ulElement.appendChild(listElement);

    for(var i = 0; i < hoursOfOperation.length; i++) {
      listElement= document.createElement('li');
      listElement.textContent = hoursOfOperation[i] + ': ' + this.salesPerHour[i] + ' cookies';
      ulElement.appendChild(listElement);
    }
    listElement = document.createElement('li');
    listElement.textContent = 'Total: ' + this.dailyTotal + ' cookies';
    ulElement.appendChild(listElement);
  }
};

var capitolHill = {
  location: 'Capitol Hill',
  minCustHour: 20,
  maxCustHour: 38,
  avgNumPer: 3.7,
  custPerHour: [],
  salesPerHour: [],
  dailyTotal: 0,
  storeMin: function(num) { //@param num minimum number of customers per hour
    this.minCustHour = num;
  },
  storeMax: function(num) { //@param num maximum number of customers per hour
    this.maxCustHour = num;
  },  
  storeAvgPer: function(num) { //@param num avg number purchased per customer
    this.avgNumPer = num;
  },
  getSalesPerHour: function() { //Store number customers per hour
    for(var i = 0; i < hoursOfOperation.length; i++) {
      this.custPerHour.push(Math.floor((Math.random() * (this.maxCustHour - this.minCustHour) + this.minCustHour)));
    }
  },
  storeResultsPerHour: function() { // Store number sales per hour and calculate daily total
    for(var i = 0; i < hoursOfOperation.length; i++) {
      var numberSold = Math.round(this.custPerHour[i] * this.avgNumPer);
      this.salesPerHour.push(numberSold);
      this.dailyTotal += numberSold;
    }
    dailyTotalSales += this.dailyTotal;
  },
  renderResults: function() {
    ulElement = document.getElementById('capitolHill');
    listElement = document.createElement('ul');
    listElement.textContent = (this.location);
    ulElement.appendChild(listElement);

    for(var i = 0; i < hoursOfOperation.length; i++) {
      listElement= document.createElement('li');
      listElement.textContent = hoursOfOperation[i] + ': ' + this.salesPerHour[i] + ' cookies';
      ulElement.appendChild(listElement);
    }
    listElement = document.createElement('li');
    listElement.textContent = 'Total: ' + this.dailyTotal + ' cookies';
    ulElement.appendChild(listElement);
  }
};

var alki = {
  location: 'Alki',
  minCustHour: 2,
  maxCustHour: 16,
  avgNumPer: 4.6,
  custPerHour: [],
  salesPerHour: [],
  dailyTotal: 0,
  storeMin: function(num) { //@param num minimum number of customers per hour
    this.minCustHour = num;
  },
  storeMax: function(num) { //@param num maximum number of customers per hour
    this.maxCustHour = num;
  },  
  storeAvgPer: function(num) { //@param num avg number purchased per customer
    this.avgNumPer = num;
  },
  getSalesPerHour: function() { //Store number customers per hour
    for(var i = 0; i < hoursOfOperation.length; i++) {
      this.custPerHour.push(Math.floor((Math.random() * (this.maxCustHour - this.minCustHour) + this.minCustHour)));
    }
  },
  storeResultsPerHour: function() { // Store number sales per hour and calculate daily total
    for(var i = 0; i < hoursOfOperation.length; i++) {
      var numberSold = Math.round(this.custPerHour[i] * this.avgNumPer);
      this.salesPerHour.push(numberSold);
      this.dailyTotal += numberSold;
    }
    dailyTotalSales += this.dailyTotal;
  },
  renderResults: function() {
    ulElement = document.getElementById('alki');
    listElement = document.createElement('ul');
    listElement.textContent = (this.location);
    ulElement.appendChild(listElement);

    for(var i = 0; i < hoursOfOperation.length; i++) {
      listElement= document.createElement('li');
      listElement.textContent = hoursOfOperation[i] + ': ' + this.salesPerHour[i] + ' cookies';
      ulElement.appendChild(listElement);
    }
    listElement = document.createElement('li');
    listElement.textContent = 'Total: ' + this.dailyTotal + ' cookies';
    ulElement.appendChild(listElement);
  }
};

firstAndPike.getSalesPerHour();
firstAndPike.storeResultsPerHour();
firstAndPike.renderResults();

seaTacAirport.getSalesPerHour();
seaTacAirport.storeResultsPerHour();
seaTacAirport.renderResults();

seattleCenter.getSalesPerHour();
seattleCenter.storeResultsPerHour();
seattleCenter.renderResults();

capitolHill.getSalesPerHour();
capitolHill.storeResultsPerHour();
capitolHill.renderResults();

alki.getSalesPerHour();
alki.storeResultsPerHour();
alki.renderResults();

ulElement = document.getElementById('finalTotal');
ulElement.textContent = ('Daily Total: ' + dailyTotalSales + ' cookies');