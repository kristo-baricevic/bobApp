import { Button } from "./Button";
import React from 'react';
import { getServerSideProps } from '../pages/index.js';


getServerSideProps;

export function PhotoCard({property}) {
   
    return ( 
          <div className="pb-3">
            <div className="max-w-sm rounded  bg-slate-100 overflow-hidden shadow-lg">
              <img src={property.url}/>
              <div className="px-6 py-4">
                <div className="text-center text-white bg-black text-xl mb-2">{property.name}</div>
                  <div className="p-6">
                    {property.tags.map(tag => (               
                      <div><Button tag={tag}/></div>
                      ))}
                  </div>
              </div>
            </div>
          </div>
        )
    }

