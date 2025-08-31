import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';

export function AuthModal({ onLogin, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Registration form state
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerRole, setRegisterRole] = useState('farmer');
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Demo users for quick login
  const demoUsers = {
    farmer: {
      id: 'farmer-1',
      name: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      role: 'farmer',
    },
    buyer: {
      id: 'buyer-1',
      name: 'Priya Wholesaler',
      email: 'priya@example.com',
      role: 'buyer',
    },
    admin: {
      id: 'admin-1',
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'admin',
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo, create a user based on email
    let user;
    if (loginEmail.includes('admin')) {
      user = demoUsers.admin;
    } else if (loginEmail.includes('buyer') || loginEmail.includes('priya')) {
      user = demoUsers.buyer;
    } else {
      user = demoUsers.farmer;
    }
    
    setIsLoading(false);
    onLogin(user);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser = {
      id: `${registerRole}-${Date.now()}`,
      name: registerName,
      email: registerEmail,
      role: registerRole,
    };
    
    setIsLoading(false);
    onLogin(newUser);
  };

  const handleDemoLogin = (role) => {
    onLogin(demoUsers[role]);
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            Welcome to HarvestHub
          </DialogTitle>
          <DialogDescription className="text-center">
            Login to your account or create a new one to get started
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            {/* Demo Login Buttons */}
            <div className="space-y-2">
              <div className="text-center text-sm text-muted-foreground">
                Quick Demo Access:
              </div>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDemoLogin('farmer')}
                >
                  Farmer
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDemoLogin('buyer')}
                >
                  Buyer
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDemoLogin('admin')}
                >
                  Admin
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="register" className="space-y-4">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <Input
                  id="register-email"
                  type="email"
                  placeholder="Enter your email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-password">Password</Label>
                <Input
                  id="register-password"
                  type="password"
                  placeholder="Create a password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-3">
                <Label>Account Type</Label>
                <RadioGroup
                  value={registerRole || ''}
                  onValueChange={(value) => setRegisterRole(value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="farmer" id="farmer" />
                    <Label htmlFor="farmer">Farmer - Sell your crops</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="buyer" id="buyer" />
                    <Label htmlFor="buyer">Buyer - Purchase crops</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked)}
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the Terms of Service and Privacy Policy
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading || !agreeTerms}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
