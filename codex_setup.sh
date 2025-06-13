#!/bin/bash

echo "--- HyperCard AI Primer Setup Script for Codex ---"

# Navigate to the app directory where package.json is located
echo "Navigating to app directory..."
cd app || { echo "Failed to navigate to app directory. Ensure you are running this script from the project root and the 'app' directory exists."; exit 1; }

# Install dependencies
echo "Installing npm dependencies..."
if npm install; then
    echo "npm dependencies installed successfully."
else
    echo "Failed to install npm dependencies. Please check for errors."
    exit 1
fi

# Create .env.local if it doesn't exist
ENV_FILE=".env.local"
if [ ! -f "$ENV_FILE" ]; then
    echo "Creating .env.local file..."
    echo "# Environment variables for HyperCard AI Primer" > "$ENV_FILE"
    echo "# Please replace YOUR_DATABASE_CONNECTION_STRING with your actual database URL" >> "$ENV_FILE"
    echo "DATABASE_URL=\"YOUR_DATABASE_CONNECTION_STRING\"" >> "$ENV_FILE"
    echo "" >> "$ENV_FILE"
    echo "# Example for local PostgreSQL:" >> "$ENV_FILE"
    echo "# DATABASE_URL=\"postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public\"" >> "$ENV_FILE"
    echo "" >> "$ENV_FILE"
    echo "NEXT_PUBLIC_APP_URL=\"http://localhost:3000\"" >> "$ENV_FILE"
    echo "" >> "$ENV_FILE"
    echo ".env.local created. IMPORTANT: Please edit this file ($ENV_FILE) and set your DATABASE_URL."
else
    echo ".env.local already exists. Skipping creation."
    echo "Please ensure your $ENV_FILE is correctly configured, especially the DATABASE_URL."
fi

echo ""
echo "--- Database Setup (Prisma) ---"
echo "Once you have configured your DATABASE_URL in app/.env.local, you need to set up your database schema."
echo "You have two main options with Prisma:"
echo ""
echo "1. If you have existing migration files (in prisma/migrations) and want to apply them (recommended for production-like setups):"
echo "   Run: npx prisma migrate deploy"
echo ""
echo "2. If you want to directly push the schema to the database (often used for development, can be destructive if the DB has data):"
echo "   Run: npx prisma db push"
echo ""
echo "Choose the command that fits your needs. These commands should be run from within the 'app' directory."
echo "Example: cd app && npx prisma migrate deploy"
echo ""
echo "--- Running the Application ---"
echo "After setting up the environment variables and the database, you can start the development server."
echo "From the 'app' directory, run:"
echo "   npm run dev"
echo ""
echo "The application should then be accessible at http://localhost:3000 (or the port specified in your setup)."
echo ""
echo "--- Setup Script Finished ---"
