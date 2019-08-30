import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';

import './filter.scss';

const Filter = ({loadDevices}) => {
  const [ showMoreFilters, setShowMoreFilters ] = useState(false);

  return (
    <aside className="filter">
      <Form
        onSubmit={(values) => loadDevices(values)}
        initialValues={{}}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="q"
                component="input"
                type="text"
                placeholder="Type here..."
                className="filter__search"
                autoFocus
              />
            </div>
            <span
              onClick={() => setShowMoreFilters(!showMoreFilters)}
              className="filter__show"
            >
              {!showMoreFilters ? 'Show filters' : 'Hide filters'}
            </span>
            {
              showMoreFilters && (
                <div className="filter__additional">
                  <Field
                    name="os_like"
                    component="select"
                  >
                    <option disabled value="">Select os</option>
                    <option value="ios">ios</option>
                    <option value="android">android</option>
                  </Field>
                  <Field
                    name="cpuCores_like"
                    component="input"
                    type="number"
                    placeholder="Cpu cores"
                  />
                  <Field
                    name="osVersion_like"
                    component="input"
                    type="number"
                    placeholder="Os version"
                  />
                  <Field
                    name="ramSize_like"
                    component="input"
                    type="number"
                    placeholder="ram size"
                  />
                  <Field
                    name="resolutionHeight_like"
                    component="input"
                    type="number"
                    placeholder="resolution height"
                  />
                  <Field
                    name="rresolutionWidth_like"
                    component="input"
                    type="number"
                    placeholder="resolution width"
                  />
                  <Field
                    name="screenSize_like"
                    component="input"
                    type="number"
                    placeholder="screen size"
                  />
                  <Field
                    name="dpi_like"
                    component="input"
                    type="number"
                    placeholder="dpi"
                  />
                </div>
              )
            }
            <button 
              type="submit" 
              disabled={submitting || pristine}
              className="filter__submit"
            >
              Search
            </button>
          </form>
        )}
      />
    </aside>
  )
}

Filter.propTypes = {};

export default Filter;