
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const NotesWidget = () => {
  const [note, setNote] = useState('');
  
  // Load note from localStorage on component mount
  useEffect(() => {
    const savedNote = localStorage.getItem('dashboardNote');
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);
  
  // Save note to localStorage whenever it changes
  useEffect(() => {
    const saveTimeout = setTimeout(() => {
      localStorage.setItem('dashboardNote', note);
    }, 500); // Debounce the save operation
    
    return () => clearTimeout(saveTimeout);
  }, [note]);

  return (
    <Card className="card-hover-effect h-full glassmorphism">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Quick Notes</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Jot down your thoughts here..."
          className="min-h-[200px] resize-none"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </CardContent>
    </Card>
  );
};

export default NotesWidget;
