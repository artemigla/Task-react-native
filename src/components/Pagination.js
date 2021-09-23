import React, { useState } from "react";
import { View, Button, StyleSheet } from 'react-native';
import { PAGE_NUMBER_LIMIT } from '../constants/Constants';

export const Pagination = ({ page, posts, paginate, currentPage, setCurrentPage }) => {
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const numberOfPages = [];

  for (let i = 1; i <= Math.ceil(posts / page); i++) {
    numberOfPages.push(i);
  }

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + PAGE_NUMBER_LIMIT);
      setMinPageNumberLimit(minPageNumberLimit + PAGE_NUMBER_LIMIT);
    }
  }

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % PAGE_NUMBER_LIMIT === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - PAGE_NUMBER_LIMIT);
      setMinPageNumberLimit(minPageNumberLimit - PAGE_NUMBER_LIMIT);
    }
  };

  const handlerButton = numberOfPages.map((item, index) => {
    if (item < maxPageNumberLimit + 1 && item > minPageNumberLimit) {
      return (
        <View key={index} style={styles.buttonNumberPage}>
          <Button onPress={() => paginate(item)} title={`${item}`} />
        </View>
      )
    }
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper}>
        <Button onPress={handlePrev}
          disabled={currentPage === numberOfPages[0] ? true : false}
          title="Prev" />
      </View>
      {handlerButton}
      <View style={styles.wrapper}>
        <Button onPress={handleNext}
          disabled={currentPage === numberOfPages[numberOfPages.length - 1] ? true : false}
          title="Next" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonNumberPage: {
    marginTop: 10,
    margin: 3,
  },
  wrapper: {
    marginTop: 10,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
})