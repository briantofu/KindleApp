import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel';
class CarouselBlock extends Component {
  render() {
    return (
      <Carousel
        ref={this.props.ref}
        data={this.props.data}
        renderItem={this.props.renderItem}
        sliderWidth={this.props.sliderWidth}
        itemWidth={this.props.itemWidth}
        containerCustomStyle={this.props.containerCustomStyle}
        inactiveSlideShift={0}
        onSnapToItem={this.props.onSnapToItem}
        useScrollView={this.props.useScrollView}
      />
    );
  }
}

export default CarouselBlock;
