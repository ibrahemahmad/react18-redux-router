import _ from 'lodash';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function SingleInvoice(props) {
    const { invoices } = props;
    const [eInvoic, serInv] = useState("");
    let params = useParams();

    useEffect(() => {
      if (params.id) {
        const result = _.find(invoices, function (eInv) {
          if (eInv.number === params.id) {
            return eInv;
          }
        });
        if (result) {
          serInv(result);
        }
      }
    },[params,invoices]);
  return (
    <div className='p-3'>
        <p className='d-inline badge bg-dark'>Name :</p> <span>{eInvoic.name}</span>
        <hr className='w-50' />
        <p className='d-inline badge bg-dark'>number :</p> <span>{eInvoic.number}</span>
        <hr className='w-50' />
        <p className='d-inline badge bg-dark'>Date :</p> <span>{eInvoic.due}</span>
        <hr className='w-50' />
        <p className='d-inline badge bg-dark'>Amount :</p> <span>{eInvoic.amount}</span>
    </div>
  )
}
