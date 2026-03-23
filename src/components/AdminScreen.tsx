import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { collection, onSnapshot, query, where, doc, updateDoc } from 'firebase/firestore';
import { UserProfile, PaymentApproval } from '../types';

const AdminScreen: React.FC = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [approvals, setApprovals] = useState<PaymentApproval[]>([]);

  useEffect(() => {
    const unsubUsers = onSnapshot(collection(db, 'users'), (snap) => {
      setUsers(snap.docs.map(d => d.data() as UserProfile));
    });
    const unsubApprovals = onSnapshot(query(collection(db, 'paymentApprovals'), where('status', '==', 'pending')), (snap) => {
      setApprovals(snap.docs.map(d => ({ id: d.id, ...d.data() } as PaymentApproval)));
    });
    return () => { unsubUsers(); unsubApprovals(); };
  }, []);

  const handleApproval = async (id: string, status: 'approved' | 'rejected') => {
    try {
      await updateDoc(doc(db, 'paymentApprovals', id), { status });
      // If approved, update user plan
      if (status === 'approved') {
        const approval = approvals.find(a => a.id === id);
        if (approval) {
          await updateDoc(doc(db, 'users', approval.uid), { plan: 'premium' });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-6 space-y-10">
      <header>
        <h1 className="font-headline font-extrabold text-2xl text-on-surface">Owner Panel</h1>
        <p className="text-on-surface-variant text-sm">Dashboard Overview</p>
      </header>

      <section className="grid grid-cols-1 gap-6">
        <div className="bg-surface-container-low p-6 rounded-lg shadow-sm flex items-center gap-5 border-l-4 border-primary">
          <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl">group</span>
          </div>
          <div>
            <p className="text-on-surface-variant text-xs font-medium">Total Users</p>
            <h4 className="text-2xl font-headline font-extrabold text-on-surface">{users.length}</h4>
          </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-lg shadow-sm flex items-center gap-5 border-l-4 border-tertiary">
          <div className="w-14 h-14 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined text-3xl">pending_actions</span>
          </div>
          <div>
            <p className="text-on-surface-variant text-xs font-medium">Pending Payments</p>
            <h4 className="text-2xl font-headline font-extrabold text-on-surface">{approvals.length}</h4>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-headline text-xl font-bold text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-tertiary">account_balance</span>
          Pending Payment Approvals
        </h2>
        <div className="space-y-6">
          {approvals.map(app => (
            <div key={app.id} className="bg-surface-container-low p-6 rounded-lg shadow-sm flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-tight">Pending Approval</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">receipt_long</span>
                </div>
                <div>
                  <h5 className="font-bold text-on-surface text-sm">{app.userName}</h5>
                  <p className="text-[10px] text-on-surface-variant">Plan: <span className="text-secondary font-bold">{app.plan}</span></p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 py-4 bg-surface-container-lowest/50 rounded-xl px-4">
                <div>
                  <p className="text-[10px] uppercase text-stone-500 font-bold">Ref Code</p>
                  <p className="text-xs font-headline font-bold">{app.refCode}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-stone-500 font-bold">Amount</p>
                  <p className="text-xs font-headline font-bold text-primary">{app.amount}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => handleApproval(app.id, 'approved')} className="flex-1 bg-green-100 text-green-700 py-2 rounded-full font-bold text-xs">Approve</button>
                <button onClick={() => handleApproval(app.id, 'rejected')} className="flex-1 bg-red-100 text-red-700 py-2 rounded-full font-bold text-xs">Reject</button>
              </div>
            </div>
          ))}
          {approvals.length === 0 && <p className="text-center text-on-surface-variant text-sm py-10 italic">No pending approvals.</p>}
        </div>
      </section>
    </motion.div>
  );
};

export default AdminScreen;
