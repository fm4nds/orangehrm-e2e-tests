.PHONY: help install format test open clean report

help:
	@echo "Available commands:"
	@echo "  make install    - Install project dependencies"
	@echo "  make format     - Format code with Prettier"
	@echo "  make test       - Run tests in headless mode"
	@echo "  make open       - Open Playwright UI"
	@echo "  make report     - Run tests and generate HTML report"
	@echo "  make clean      - Remove temporary test files"

install:
	@echo "Installing dependencies..."
	npm install

format:
	@echo "Formatting code..."
	npx prettier --write .

test:
	@echo "Running tests in headless mode..."
	npx playwright test

open:
	@echo "Opening Playwright UI..."
	npx playwright test --ui

report:
	@echo "Running tests and generating HTML report..."
	npx playwright test --reporter=html
	@echo "Opening HTML report..."
	npx playwright show-report

clean:
	@echo "Removing temporary test files..."
	-@if exist "test-results" rmdir /s /q test-results
	-@if exist "playwright-report" rmdir /s /q playwright-report
	-@if exist "playwright/.cache" rmdir /s /q playwright\.cache
