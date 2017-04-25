/*
 * MIT License
 *
 * Copyright (c) 2017 Tang Xiaozhe.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

"use strict";

import React, {Component} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import CalendarHeader from "./calenderHeader";
import CalendarHead from "./calenderHead";
import CalendarBody from "./calenderBody";

import {Color} from "../res"

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    let cur = new Date();
    this.state = {
      date: cur,
      current: cur
    };
  }

  onNavChange = (date) => {
    this.setState({
      date: date
    });
  };

  onSelectedChange = (date) => {
    this.setState({
      current: date
    });
  };

  render() {
    var date = this.state.date;
    var current = this.state.current;
    return (
      <View style={[styles.react_calendar]}>
        <CalendarHeader date={date} onNavChange={this.onNavChange}></CalendarHeader>
        <View>
          <CalendarHead />
          <CalendarBody
            current={current}
            date={date}
            onSelectedChange={this.onSelectedChange}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  react_calendar: {
    backgroundColor: Color.white,
  },
});
