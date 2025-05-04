
-- Create the 'resumes' storage bucket if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM storage.buckets
        WHERE id = 'resumes'
    ) THEN
        INSERT INTO storage.buckets (id, name, public)
        VALUES ('resumes', 'resumes', false);
        
        -- Set up RLS policy for the bucket
        INSERT INTO storage.policies (name, bucket_id, operation, definition, policy_name)
        VALUES 
        ('Auth users can upload resumes', 'resumes', 'INSERT', '((auth.uid() = storage.foldername(name)[1]::uuid))', 'allow_auth_users_insert'),
        ('Auth users can read their own resumes', 'resumes', 'SELECT', '((auth.uid() = storage.foldername(name)[1]::uuid))', 'allow_auth_users_select'),
        ('Auth users can update their own resumes', 'resumes', 'UPDATE', '((auth.uid() = storage.foldername(name)[1]::uuid))', 'allow_auth_users_update'),
        ('Auth users can delete their own resumes', 'resumes', 'DELETE', '((auth.uid() = storage.foldername(name)[1]::uuid))', 'allow_auth_users_delete');
    END IF;
END $$;
