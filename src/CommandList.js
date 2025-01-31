import { useState } from 'react';
import { Input } from './components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Search } from 'lucide-react';

interface Command {
  name: string;
  description: string;
  usage: string;
  examples: string[];
}

const commands: Command[] = [
  {
    name: 'pkg',
    description: 'Package manager for Termux.',
    usage: 'pkg [options] [package_name]',
    examples: ['pkg install vim', 'pkg update']
  },
  {
    name: 'termux-setup-storage',
    description: 'Grant storage access to Termux.',
    usage: 'termux-setup-storage',
    examples: ['termux-setup-storage']
  },
  {
    name: 'termux-info',
    description: 'Show information about Termux.',
    usage: 'termux-info',
    examples: ['termux-info']
  }
];

export default function CommandList() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredCommands = commands.filter(command =>
    command.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Termux Commands</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Search commands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
          <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
        </div>
        <ul className="space-y-2">
          {filteredCommands.map((command, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded">
              <strong>{command.name}</strong>: {command.description}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
