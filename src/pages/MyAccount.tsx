import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/user/user.selectors';
import { LinearProgress } from '@mui/material';
import { BorrowingType } from '../types/borrowing.types';
import BorrowingCard from './BorrwingCard';
import { setBorroingSlice } from '../redux/borroring/borrowing.slice';
export default function MyAccount() {
    const user = useSelector(selectUser);
    console.log("My Account")
    console.log(user)
       const dispatch=useDispatch()
       dispatch(setBorroingSlice(user.user.borrowings))
    const borroring: BorrowingType[] = user.user.borrowings;
    return <>
        <div style={{ paddingTop: '20px', paddingBottom: '120px' }}>
            {borroring ? (
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                }}>
                    {borroring.map((borrowring, index) => (
                        <div key={borrowring.id} >
                            <BorrowingCard key={borrowring.id} borrowing={borrowring} />
                        </div>
                    ))}
                </div>
            ) : (
                <LinearProgress />
            )}
        </div>
    </>

}


