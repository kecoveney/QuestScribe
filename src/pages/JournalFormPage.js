import React from 'react';
import JournalForm from '../components/journals/JournalForm';

const JournalFormPage = () => {
  return (
    <div className="journal-form-page">
      <h2>New Journal Entry</h2>
      <JournalForm />
    </div>
  );
};

export default JournalFormPage;
