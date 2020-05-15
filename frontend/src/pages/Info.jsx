import React, { Component } from 'react';

import toysService from '../services/toysService.js';
import MapContainer from '../components/Map/MapContainer';
import { BarChart } from '../components/Chart/BarChart';
import { PieChart } from '../components/Chart/PieChart';
import { Spinner } from '../components/Layout/Spinner';

export class Info extends Component {
  state = {
    years: null,
    eduTyps: null,
    funnyTyps: null,
    adultTyps: null,
  };

  componentDidMount() {
    setTimeout(() => {
      toysService
        .getByType('Educational')
        .then((eduTyps) => this.setState({ eduTyps: this.average(eduTyps) }));
      toysService
        .getByType('Funny')
        .then((funnyTyps) =>
          this.setState({ funnyTyps: this.average(funnyTyps) })
        );
      toysService
        .getByType('Adult')
        .then((adultTyps) =>
          this.setState({ adultTyps: this.average(adultTyps) })
        );
      toysService.getToysYears().then((years) => this.setState({ years }));
    }, 2000);
  }

  average = (arr) => {
    var total = 0;
    arr.forEach((item) => {
      total += item.price;
    });
    return (total / arr.length).toFixed(1);
  };

  getNumOfToysPerYear = (years) => {
    var count = {};
    years.forEach(function (i) {
      count[i] = (count[i] || 0) + 1;
    });
    return count;
  };

  render() {
    const { eduTyps, funnyTyps, adultTyps, years } = this.state;
    const uniqueYears = [...new Set(years)];
    return (
      <div>
        {eduTyps !== null ? (
          <div className='grid-1 text-center'>
            <h1>Statistics</h1>
            <div className='grid-1-1 card'>
              <div>
                <BarChart
                  eduTyps={eduTyps}
                  funnyTyps={funnyTyps}
                  adultTyps={adultTyps}
                  labels={['Educational', 'Funny', 'Adult']}
                />
              </div>
              <div>
                <PieChart
                  eduTyps={eduTyps}
                  funnyTyps={funnyTyps}
                  adultTyps={adultTyps}
                  labels={uniqueYears}
                />
              </div>
            </div>
            <MapContainer />
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}
