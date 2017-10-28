import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const blockStyle = { display: 'block' };
const flexContainer = {
  display: 'flex',
  justifyContent: 'space-between',
};

export const ItemCard = ({
  name, price, description, imgSrc,
}) => (
  <Card >
    <CardTitle
      title={name}
      subtitle={price}
      subtitleStyle={blockStyle}
      titleStyle={blockStyle}
      style={flexContainer}
    />
    <CardMedia>
      <img src={imgSrc} alt="" />
    </CardMedia>
    <CardText>
      {description}
    </CardText>
    <CardActions>
      <FlatButton primary>View The Deets!</FlatButton>
    </CardActions>
  </Card>
);

ItemCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  imgSrc: PropTypes.string,
};

ItemCard.defaultProps = {
  name: '',
  price: undefined,
  description: '',
  imgSrc: 'https://static.vecteezy.com/system/resources/previews/000/056/105/non_2x/dollar-sign-vector.jpg',
};

export default ItemCard;
