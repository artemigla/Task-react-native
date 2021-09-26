import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { PAGE_NUMBER_LIMIT } from '../constants/constants';
import PropTypes from 'prop-types';

export const Pagination = ({ page, posts, paginate, currentPage, setCurrentPage }) => {
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const numberOfPages = [];

  for (let i = 1; i <= Math.ceil(posts / page); i++) {
    numberOfPages.push(i);
  }

  const handlerNext = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + PAGE_NUMBER_LIMIT);
      setMinPageNumberLimit(minPageNumberLimit + PAGE_NUMBER_LIMIT);
    }
  };

  const handlerPrev = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % PAGE_NUMBER_LIMIT === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - PAGE_NUMBER_LIMIT);
      setMinPageNumberLimit(minPageNumberLimit - PAGE_NUMBER_LIMIT);
    }
  };

  const pageNumber = (item, index) => {
    if (item < maxPageNumberLimit + 1 && item > minPageNumberLimit) {
      return (
        <View key={index} style={styles.buttonNumberPage}>
          <Button onPress={() => paginate(item)} title={`${item}`} />
        </View>
      );
    }
  };

  const handlerButton = numberOfPages.map(pageNumber);

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper}>
        <Button onPress={handlerPrev}
          disabled={currentPage === numberOfPages[0] ? true : false}
          title="Prev" />
      </View>
      {handlerButton}
      <View style={styles.wrapper}>
        <Button onPress={handlerNext}
          disabled={currentPage === numberOfPages[numberOfPages.length - 1] ? true : false}
          title="Next" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonNumberPage: {
    marginTop: 10,
    margin: 3,
    marginBottom: 30
  },
  wrapper: {
    marginTop: 10,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 30
  }
});

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  posts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};