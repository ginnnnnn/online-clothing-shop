import React from 'react';

import {
    CollectionItemContainer,
    BackgroundImage,
    AddButton,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer
} from './collection-item.styles';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';



const CollectionItem = ({ item, addItem }) => {
    const { name, imageUrl, price } = item
    return (
        <CollectionItemContainer>
            <BackgroundImage className="image"
                imageUrl={imageUrl}
            />
            <CollectionFooterContainer>
                <NameContainer >{name}</NameContainer>
                <PriceContainer >${price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => addItem(item)}>Add to Cart</AddButton>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);