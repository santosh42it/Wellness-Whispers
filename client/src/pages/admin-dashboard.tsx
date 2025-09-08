import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";
import { Upload, LogOut, Edit, Type, Save, Image as ImageIcon, Edit3 } from "lucide-react";
import { ObjectUploader } from "@/components/ObjectUploader";
import type { UploadResult } from "@uppy/core";

// Define current website images that can be managed
const websiteImages = [
  // Hero Section Images
  {
    id: "hero-1",
    title: "Healing Forest Path",
    currentUrl: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    description: "Main hero section background image",
    section: "Hero Section",
    altText: "Healing does not shout it whispers - Misty green leaves in peaceful nature"
  },
  {
    id: "hero-2", 
    title: "Rainy Window Reflection",
    currentUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    description: "Emotional validation image in hero section",
    section: "Hero Section",
    altText: "You are not too much - Rainy window with gentle reflection and emotional validation"
  },
  {
    id: "hero-3",
    title: "Mountain Reflection", 
    currentUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    description: "Mountain landscape in hero section",
    section: "Hero Section", 
    altText: "Not all healing needs words - Girl in mountains finding peace and inner strength"
  },

  // Meet Me Section Images
  {
    id: "about-1",
    title: "Professional Photo",
    currentUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
    description: "Therapist professional photo in about section",
    section: "Meet Me Section",
    altText: "Ms. Pavan Chowdhary - Professional therapist with warm, welcoming presence"
  },

  // Services Section Images  
  {
    id: "services-1",
    title: "Anxiety Support",
    currentUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    description: "Image representing anxiety support services",
    section: "Services Section",
    altText: "Gentle hands offering support - Anxiety and stress management therapy"
  },
  {
    id: "services-2", 
    title: "Depression Healing",
    currentUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    description: "Image representing depression healing services", 
    section: "Services Section",
    altText: "Light breaking through clouds - Depression recovery and emotional healing"
  },
  {
    id: "services-3",
    title: "Relationship Support", 
    currentUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    description: "Image representing relationship therapy services",
    section: "Services Section",
    altText: "Two figures walking together - Relationship counseling and connection healing"
  },

  // Approach Section Images
  {
    id: "approach-1",
    title: "Mindful Session",
    currentUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    description: "Image showing therapy session atmosphere",
    section: "Approach Section",
    altText: "Peaceful therapy environment - Mindful, gentle therapeutic approach"
  },

  // After Therapy Section Images
  {
    id: "after-1",
    title: "Inner Peace",
    currentUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    description: "Mountain reflection showing inner peace",
    section: "After Therapy Section",
    altText: "Mountain reflection showing the inner peace achieved through therapy"
  }
];

// Define text content blocks that can be edited
const textBlocks = [
  // Hero Section
  {
    key: "hero_title",
    title: "Hero Main Title",
    section: "Hero Section",
    defaultContent: "Welcome to Your Healing Space",
    type: "text"
  },
  {
    key: "hero_subtitle", 
    title: "Hero Subtitle",
    section: "Hero Section",
    defaultContent: "Here, you're safe to heal.",
    type: "text"
  },
  {
    key: "hero_description",
    title: "Hero Description", 
    section: "Hero Section",
    defaultContent: "Begin therapy today, in a space built on trust, warmth, and healing.",
    type: "text"
  },
  {
    key: "hero_button_text",
    title: "Hero Button Text",
    section: "Hero Section", 
    defaultContent: "Start Session",
    type: "text"
  },
  {
    key: "hero_quote_1",
    title: "Hero Quote 1",
    section: "Hero Section",
    defaultContent: "Healing does not shout it whispers",
    type: "text"
  },
  {
    key: "hero_quote_2", 
    title: "Hero Quote 2",
    section: "Hero Section",
    defaultContent: "Not all healing needs words",
    type: "text"
  },
  {
    key: "hero_quote_3",
    title: "Hero Quote 3", 
    section: "Hero Section",
    defaultContent: "You are not too much",
    type: "text"
  },
  
  // Meet Me Section
  {
    key: "about_title",
    title: "Meet Me Section Title",
    section: "Meet Me Section",
    defaultContent: "Meet Me", 
    type: "text"
  },
  {
    key: "about_credentials_title",
    title: "Credentials Subtitle",
    section: "Meet Me Section",
    defaultContent: "Credentials & Experience",
    type: "text"
  }, 
  {
    key: "about_credentials_text",
    title: "Credentials Text",
    section: "Meet Me Section",
    defaultContent: "Gold Medalist in MPA with a Postgraduate Diploma in Guidance & Counselling, complemented by various certified courses in therapeutic methods. Over 45 years of people-focused leadership, entrepreneurship, and mentoring experience, combined with 6+ years of dedicated emotional wellness practice.",
    type: "textarea"
  },
  {
    key: "about_philosophy_title", 
    title: "Philosophy Subtitle",
    section: "Meet Me Section",
    defaultContent: "Philosophy & Values",
    type: "text"
  },
  {
    key: "about_philosophy_text",
    title: "Philosophy Text",
    section: "Meet Me Section", 
    defaultContent: "At Wellness Whispers, therapy is offered as a form of service, with a focus on making emotional healing accessible and deeply personal. Guided by empathy, trust, and a genuine commitment to care, the aim is to create a safe, non-judgmental space where emotional well-being can flourish.",
    type: "textarea"
  },
  
  // Services Section
  {
    key: "services_title",
    title: "Services Section Title",
    section: "Services Section",
    defaultContent: "Who I Work With",
    type: "text"
  },
  {
    key: "services_subtitle",
    title: "Services Subtitle", 
    section: "Services Section",
    defaultContent: "Every emotional experience is valid. Here's how we can work together on your healing journey.",
    type: "text"
  },
  
  // Approach Section
  {
    key: "approach_title",
    title: "Approach Section Title",
    section: "Approach Section",
    defaultContent: "Gentle Tools for Healing",
    type: "text"
  },
  {
    key: "approach_subtitle",
    title: "Approach Subtitle",
    section: "Approach Section", 
    defaultContent: "Simple, compassionate methods to help you find balance again.",
    type: "textarea"
  }
];

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingImage, setEditingImage] = useState<string | null>(null);
  const [editingText, setEditingText] = useState<{ [key: string]: string }>({});
  const [textValues, setTextValues] = useState<{ [key: string]: string }>({});

  // Check authentication
  const { data: adminUser, isLoading: authLoading } = useQuery({
    queryKey: ["/api/admin/me"],
    retry: false,
  });

  // Fetch current gallery images to show uploaded images
  const { data: galleryImages, isLoading: galleryLoading } = useQuery({
    queryKey: ["/api/gallery"],
    retry: false,
    refetchInterval: 5000, // Auto refresh every 5 seconds
  });

  // Fetch current content blocks
  const { data: contentBlocks, isLoading: contentLoading } = useQuery({
    queryKey: ["/api/content"],
    retry: false,
    refetchInterval: 5000, // Auto refresh every 5 seconds
  });

  // Text content mutation
  const textMutation = useMutation({
    mutationFn: async ({ blockKey, content, title }: { blockKey: string; content: string; title: string }) => {
      const response = await apiRequest("POST", "/api/content", {
        blockKey,
        title,
        content,
        blockType: "text",
        isActive: true
      });
      return response.json();
    },
    onSuccess: (data, { blockKey, title }) => {
      toast({
        title: "Success",
        description: `${title} updated successfully`,
      });
      setEditingText(prev => {
        const newState = { ...prev };
        delete newState[blockKey];
        return newState;
      });
      queryClient.invalidateQueries({ queryKey: ["/api/content"] });
    },
    onError: (error, { title }) => {
      toast({
        title: "Error",
        description: `Failed to update ${title}: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  // Upload mutation
  const uploadMutation = useMutation({
    mutationFn: async ({ uploadUrl, imageId }: { uploadUrl: string; imageId: string }) => {
      const websiteImage = websiteImages.find(img => img.id === imageId);
      if (!websiteImage) throw new Error("Image not found");
      
      // Update the image in our system
      const updateData = {
        title: websiteImage.title,
        description: websiteImage.description,
        imageUrl: uploadUrl,
        altText: websiteImage.altText,
        category: websiteImage.section.toLowerCase().replace(' section', '')
      };
      
      // Create or update the gallery image
      const response = await fetch("/api/admin/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include session cookies
        body: JSON.stringify(updateData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update gallery image");
      }
      
      const result = await response.json();
      
      return response;
    },
    onSuccess: (data, { imageId }) => {
      const websiteImage = websiteImages.find(img => img.id === imageId);
      toast({
        title: "Success",
        description: `${websiteImage?.title} updated successfully`,
      });
      setEditingImage(null);
      queryClient.invalidateQueries({ queryKey: ["/api/gallery"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/gallery"] });
    },
    onError: (error, { imageId }) => {
      const websiteImage = websiteImages.find(img => img.id === imageId);
      toast({
        title: "Error", 
        description: `Failed to update ${websiteImage?.title}`,
        variant: "destructive",
      });
    },
  });

  // Handle file upload
  const handleGetUploadParameters = async () => {
    console.log("Getting upload parameters...");
    try {
      const response = await fetch("/api/objects/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include session cookies
      });
      
      console.log("Upload response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Upload error:", errorData);
        throw new Error(errorData.error || "Failed to get upload URL");
      }
      
      const data = await response.json();
      console.log("Upload URL received:", data.uploadURL);
      return {
        method: "PUT" as const,
        url: data.uploadURL,
      };
    } catch (error) {
      console.error("Upload parameters error:", error);
      throw error;
    }
  };

  const handleUploadComplete = (imageId: string) => (result: UploadResult<Record<string, unknown>, Record<string, unknown>>) => {
    console.log("Upload result:", result);
    if (result.successful && result.successful.length > 0) {
      const uploadedFile = result.successful[0];
      console.log("Uploaded file:", uploadedFile);
      setEditingImage(imageId);
      uploadMutation.mutate({
        uploadUrl: uploadedFile.uploadURL as string,
        imageId
      });
    } else if (result.failed && result.failed.length > 0) {
      const failedFile = result.failed[0];
      console.error("Upload failed:", failedFile.error);
      toast({
        title: "Upload Failed",
        description: failedFile.error || "Failed to upload image",
        variant: "destructive",
      });
    }
  };

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/admin/logout", { method: "POST" });
      return response.json();
    },
    onSuccess: () => {
      queryClient.clear();
      setLocation("/admin/login");
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
      });
    },
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !adminUser) {
      setLocation("/admin/login");
    }
  }, [adminUser, authLoading, setLocation]);

  if (authLoading) {
    return (
      <div className="min-h-screen misty-sage-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-sage-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-earthy-brown">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!adminUser) {
    return null; // Will redirect to login
  }

  // Helper functions for text management
  const getCurrentTextContent = (blockKey: string) => {
    const block = Array.isArray(contentBlocks) ? contentBlocks.find(b => b.blockKey === blockKey) : null;
    const textBlock = textBlocks.find(t => t.key === blockKey);
    return block?.content || textBlock?.defaultContent || '';
  };

  const handleTextEdit = (blockKey: string) => {
    const currentContent = getCurrentTextContent(blockKey);
    setTextValues(prev => ({ ...prev, [blockKey]: currentContent }));
    setEditingText(prev => ({ ...prev, [blockKey]: currentContent }));
  };

  const handleTextSave = (blockKey: string) => {
    const textBlock = textBlocks.find(t => t.key === blockKey);
    if (!textBlock) return;

    const content = textValues[blockKey] || getCurrentTextContent(blockKey);
    textMutation.mutate({
      blockKey,
      content,
      title: textBlock.title
    });
  };

  const handleTextCancel = (blockKey: string) => {
    setEditingText(prev => {
      const newState = { ...prev };
      delete newState[blockKey];
      return newState;
    });
    setTextValues(prev => {
      const newState = { ...prev };
      delete newState[blockKey];
      return newState;
    });
  };

  return (
    <div className="min-h-screen misty-sage-bg">
      <div className="container mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-playfair font-bold text-earthy-brown">
              Website Manager
            </h1>
            <p className="text-charcoal-grey mt-2">
              Manage images and text content on your website
            </p>
          </div>
          
          <Button
            onClick={() => logoutMutation.mutate()}
            disabled={logoutMutation.isPending}
            variant="outline"
            className="border-earthy-brown text-earthy-brown hover:bg-earthy-brown hover:text-white"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="images" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="images" className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              Images
            </TabsTrigger>
            <TabsTrigger value="text" className="flex items-center gap-2">
              <Type className="h-4 w-4" />
              Text Content
            </TabsTrigger>
          </TabsList>

          {/* Images Tab */}
          <TabsContent value="images" className="space-y-6">
            {/* Image Grid */}
            {/* Group images by section */}
            {Object.entries(websiteImages.reduce((acc, image) => {
              if (!acc[image.section]) acc[image.section] = [];
              acc[image.section].push(image);
              return acc;
            }, {} as Record<string, typeof websiteImages>)).map(([section, sectionImages]) => (
              <div key={section} className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-earthy-brown mb-6 border-b border-sage-green/20 pb-2">
                  {section}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sectionImages.map((image) => (
                    <Card key={image.id} className="bg-white/80 backdrop-blur-sm border-sage-green/20 shadow-soft">
                      <CardHeader>
                        <CardTitle className="text-lg font-playfair text-earthy-brown">
                          {image.title}
                        </CardTitle>
                        <CardDescription className="text-charcoal-grey text-sm">
                          {image.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Current Image Preview */}
                        <div className="relative">
                          {(() => {
                            // Find the current uploaded image for this slot
                            const sectionCategory = image.section.toLowerCase().replace(' section', '');
                            const uploadedImage = Array.isArray(galleryImages) 
                              ? galleryImages.find(img => 
                                  (img.category === sectionCategory || img.category === 'hero') && 
                                  (img.title === image.title || img.altText === image.altText))
                              : null;
                            
                            const currentImageUrl = uploadedImage?.imageUrl?.startsWith('/objects/') 
                              ? uploadedImage.imageUrl 
                              : image.currentUrl;
                              
                            return (
                              <img
                                src={currentImageUrl}
                                alt={image.altText}
                                className="w-full h-40 object-cover rounded-lg border border-sage-green/20"
                              />
                            );
                          })()}
                        </div>

                        {/* Upload Button */}
                        <div className="flex justify-center">
                          <ObjectUploader
                            maxNumberOfFiles={1}
                            maxFileSize={10485760}
                            onGetUploadParameters={handleGetUploadParameters}
                            onComplete={handleUploadComplete(image.id)}
                            buttonClassName="bg-sage-green hover:bg-olive-green text-white border-0"
                          >
                            <div className="flex items-center gap-2">
                              <Upload className="h-4 w-4" />
                              <span>
                                {editingImage === image.id && uploadMutation.isPending
                                  ? "Updating..."
                                  : "Upload New Image"
                                }
                              </span>
                            </div>
                          </ObjectUploader>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Text Content Tab */}
          <TabsContent value="text" className="space-y-6">
            {/* Group text blocks by section */}
            {Object.entries(textBlocks.reduce((acc, block) => {
              if (!acc[block.section]) acc[block.section] = [];
              acc[block.section].push(block);
              return acc;
            }, {} as Record<string, typeof textBlocks>)).map(([section, sectionBlocks]) => (
              <div key={section} className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-earthy-brown mb-6 border-b border-sage-green/20 pb-2">
                  {section}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {sectionBlocks.map((block) => (
                    <Card key={block.key} className="bg-white/80 backdrop-blur-sm border-sage-green/20 shadow-soft">
                      <CardHeader>
                        <CardTitle className="text-lg font-playfair text-earthy-brown flex items-center justify-between">
                          {block.title}
                          {editingText[block.key] ? (
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                onClick={() => handleTextSave(block.key)}
                                disabled={textMutation.isPending}
                                className="bg-sage-green hover:bg-olive-green text-white"
                              >
                                <Save className="h-3 w-3 mr-1" />
                                Save
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleTextCancel(block.key)}
                                className="border-charcoal-grey text-charcoal-grey"
                              >
                                Cancel
                              </Button>
                            </div>
                          ) : (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleTextEdit(block.key)}
                              className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white"
                            >
                              <Edit3 className="h-3 w-3 mr-1" />
                              Edit
                            </Button>
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {editingText[block.key] ? (
                          <div className="space-y-2">
                            <Label htmlFor={`text-${block.key}`} className="text-sm font-medium text-charcoal-grey">
                              Edit Content
                            </Label>
                            {block.type === "textarea" ? (
                              <Textarea
                                id={`text-${block.key}`}
                                value={textValues[block.key] || getCurrentTextContent(block.key)}
                                onChange={(e) => setTextValues(prev => ({ ...prev, [block.key]: e.target.value }))}
                                className="min-h-[120px] resize-y border-sage-green/20 focus:border-sage-green"
                                placeholder={block.defaultContent}
                              />
                            ) : (
                              <Input
                                id={`text-${block.key}`}
                                value={textValues[block.key] || getCurrentTextContent(block.key)}
                                onChange={(e) => setTextValues(prev => ({ ...prev, [block.key]: e.target.value }))}
                                className="border-sage-green/20 focus:border-sage-green"
                                placeholder={block.defaultContent}
                              />
                            )}
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <Label className="text-sm font-medium text-charcoal-grey">
                              Current Content
                            </Label>
                            <div className="p-3 bg-sage-green/5 rounded-lg border border-sage-green/10">
                              <p className="text-charcoal-grey whitespace-pre-wrap">
                                {getCurrentTextContent(block.key)}
                              </p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Instructions */}
            <Card className="mt-8 bg-white/60 backdrop-blur-sm border-sage-green/20">
              <CardHeader>
                <CardTitle className="text-lg font-playfair text-earthy-brown">
                  How to Edit Text Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-charcoal-grey">
                  <p>1. Click "Edit" on any text block above</p>
                  <p>2. Modify the content in the text field</p>
                  <p>3. Click "Save" to update the content on your website</p>
                  <p>4. Your website will immediately show the new text</p>
                  <div className="mt-4 p-3 bg-sage-green/10 rounded-lg">
                    <p className="text-sm">
                      <strong>Tip:</strong> Keep your text warm and welcoming to match the healing atmosphere of your practice. 
                      Short, gentle phrases work best for headings, while longer descriptions can provide more detail about your services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}