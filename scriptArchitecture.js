   // Stories array to store all stories
        let storiesArray = [
            {
                id: 1,
                title: "PARK RANGER",
                description: "Helen Fox manages the northern wilderness. The mountain and surrounding landscape is integral to her life and the lives of her local community.",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                icon: "🦅"
            },
            {
                id: 2,
                title: "THE ARCHER",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a justo tortor. Ut accumsan congue elit, ut condimentum purus.",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                icon: "🏹"
            },
            {
                id: 3,
                title: "MUSHROOM FARMER",
                description: "Aliquam rutrum tellus ex, vitae consectetur elit tempor eu. Suspendisse a justo tellus. Ut cursus dolor sed tempor mollis aliquam dui nunc porta.",
                image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                icon: "🍄"
            }
        ];

        // DOM Elements
        const storiesGrid = document.getElementById('storiesGrid');
        const modal = document.getElementById('storyModal');
        const storyForm = document.getElementById('storyForm');
        const imageInput = document.getElementById('storyImage');
        const imagePreview = document.getElementById('imagePreview');

        // Initialize the page
        function init() {
            renderStories();
            setupEventListeners();
        }

        // Setup event listeners
        function setupEventListeners() {
            imageInput.addEventListener('change', handleImagePreview);
            storyForm.addEventListener('submit', handleFormSubmit);
            
            // Close modal when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }

        // Render all stories
        function renderStories() {
            storiesGrid.innerHTML = '';
            
            storiesArray.forEach((story, index) => {
                const storyElement = createStoryElement(story, index);
                storiesGrid.appendChild(storyElement);
                
                // Animate story appearance
                setTimeout(() => {
                    storyElement.style.animationDelay = `${index * 0.2}s`;
                }, 100);
            });
        }

        // Create a story element
        function createStoryElement(story, index) {
            const storyDiv = document.createElement('div');
            storyDiv.className = 'story-item';
            
            storyDiv.innerHTML = `
                <div class="story-image-container">
                    <div class="watercolor-bg"></div>
                    <div class="story-image">
                        <div class="story-image-inner">
                            <img src="${story.image}" alt="${story.title}">
                        </div>
                        <button class="delete-btn" onclick="deleteStory(${story.id})" title="Delete Story">×</button>
                    </div>
                </div>
                <div class="story-content">
                    <h2 class="story-title">${story.title}</h2>
                    <p class="story-description">${story.description}</p>
                    <button class="play-story" onclick="playStory('${story.title}')">
                        <div class="play-icon"></div>
                        Play Story
                    </button>
                    <div class="story-icon">${story.icon}</div>
                </div>
            `;
            
            return storyDiv;
        }

        // Open modal
        function openModal() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        // Close modal
        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            storyForm.reset();
            imagePreview.style.display = 'none';
        }

        // Handle image preview
        function handleImagePreview(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imagePreview.src = e.target.result;
                    imagePreview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        }

        // Handle form submission
        function handleFormSubmit(e) {
            e.preventDefault();
            
            const title = document.getElementById('storyTitle').value;
            const description = document.getElementById('storyDescription').value;
            const imageFile = imageInput.files[0];
            
            if (imageFile) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const newStory = {
                        id: Date.now(), // Simple ID generation
                        title: title.toUpperCase(),
                        description: description,
                        image: e.target.result,
                        icon: getRandomIcon()
                    };
                    
                    storiesArray.push(newStory);
                    renderStories();
                    closeModal();
                    
                    // Show success message
                    showNotification('Story added successfully!');
                };
                reader.readAsDataURL(imageFile);
            } else {
                // Use placeholder image if no image uploaded
                const newStory = {
                    id: Date.now(),
                    title: title.toUpperCase(),
                    description: description,
                    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                    icon: getRandomIcon()
                };
                
                storiesArray.push(newStory);
                renderStories();
                closeModal();
                showNotification('Story added successfully!');
            }
        }

        // Get random icon
        function getRandomIcon() {
            const icons = ['🌲', '🏔️', '🦅', '🏹', '🍄', '🦌', '🌿', '⭐', '🔥', '🌙', '🦋', '🌺'];
            return icons[Math.floor(Math.random() * icons.length)];
        }

        // Delete story
        function deleteStory(id) {
            if (confirm('Are you sure you want to delete this story?')) {
                storiesArray = storiesArray.filter(story => story.id !== id);
                renderStories();
                showNotification('Story deleted successfully!');
            }
        }

        // Play story (placeholder function)
        function playStory(title) {
            alert(`Playing story: ${title}\n\nThis would open the story player/reader.`);
        }

        // Show notification
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 30px;
                right: 30px;
                background: var(--color-coral);
                color: var(--color-white);
                padding: 20px 30px;
                border-radius: 10px;
                z-index: 10000;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                transform: translateX(400px);
                transition: transform 0.3s ease;
            `;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 100);
            
            setTimeout(() => {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', init);

        // Console log for debugging
        console.log('Stories Array:', storiesArray);