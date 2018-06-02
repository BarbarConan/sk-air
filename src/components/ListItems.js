import React from 'react';
import PropTypes from 'prop-types';

import Child from './Childs';

const ListItems = props => {
  const { data } = props;
  const parentItems = data.filter(item => typeof item.parentId === 'undefined');

  return parentItems.length === 0 ? (
    <p style={{ textAlign: 'center', fontSize: '1.5rem', color: 'red' }}>No content to show</p>
  ) : (
    parentItems.map(item => {
      const { id } = item;
      const childItems = data.filter(child => child.parentId === id);
      const hasChild = childItems.length > 0;
      const isVisible = !item.isCollapsed ? 'collapsed' : '';

      return (
        <div className={`list-item ${isVisible}`} key={id}>
          <div className="parent">
            <div className="column">{item.city}</div>

            {hasChild && (
              <div className="column">
                <button
                  className={`btn-collapse ${isVisible}`}
                  type="button"
                  onClick={() => props.collaspeFn(item)}
                />
              </div>
            )}

            <div className="column">
              <button
                className="btn-delete"
                type="button"
                onClick={() => props.deleteFn(item)}
                onKeyPress={() => props.deleteFn(item)}
              >
                Delete
              </button>
            </div>
          </div>

          {hasChild &&
            !isVisible && (
              <div className="childs">
                {childItems.map(child => <Child key={child.id} data={child} />)}
              </div>
            )}
        </div>
      );
    })
  );
};

ListItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListItems;
