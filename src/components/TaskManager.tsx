
import React, { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Complete dashboard project', completed: false },
    { id: '2', text: 'Read for 30 minutes', completed: false },
    { id: '3', text: 'Exercise', completed: true },
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  const addTask = () => {
    if (newTaskText.trim() === '') return;
    
    const newTask: Task = {
      id: Date.now().toString(),
      text: newTaskText,
      completed: false,
    };
    
    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed } 
        : task
    ));
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <Card className="card-hover-effect h-full glassmorphism">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex mb-4 space-x-2">
          <Input
            placeholder="Add a new task"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button size="sm" onClick={addTask}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-2 max-h-[240px] overflow-y-auto pr-2">
          {tasks.map(task => (
            <div 
              key={task.id} 
              className={`flex items-center p-3 rounded-md border transition-colors ${
                task.completed 
                  ? 'border-green-200 bg-green-50 text-green-700' 
                  : 'border-border hover:bg-muted/50'
              }`}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              <div className={`flex-shrink-0 rounded-full p-1 mr-3 ${
                task.completed 
                  ? 'bg-green-200' 
                  : 'border border-muted-foreground/30'
              }`}>
                {task.completed && <Check className="h-4 w-4 text-green-700" />}
                {!task.completed && <div className="h-4 w-4" />}
              </div>
              <span className={`flex-1 ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                {task.text}
              </span>
            </div>
          ))}
          {tasks.length === 0 && (
            <div className="text-center text-muted-foreground py-4">
              No tasks yet. Add one above!
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskManager;
